/**
 * 参考：F:\web-project\react-project\react-blog-gershonv
 * 参考：F:\web-project\react-project\react-blog-biaochenxuying\blog-react
 * 1、创建Layout.js组件用于遍历菜单、权限、token路由判断
 * 2、在当前页面中引入routes.js配置文件，用于配置react的路由组件映射
 */

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import adminRouters from "@/router/adminRouters2";
import Login from "./Login";
import {useSelector} from 'react-redux'  //引入连接器
import Layout from "@/components/layout";
// const Layout = React.lazy(() => import('../components/layout'));//Suspense放到layout里面按需加载子菜单组件，放到外面会有全局刷新
import { Spin } from 'antd';
/**
 * 这里定义的<Spin tip="Loading..." size="large"/>是组件加载中的显示，一般项目使用这个就可以了
 */




function Main2() {

  const isAuthenticated = useSelector(state => state.user.isAuthenticated) // 相当于 connect(state => state.user.role)(App)
  
  const renderRoute = (r, newPath) => (
    <Route
      key={r.path}
      path={newPath}
      exact={r.exact}
      component={r.component}
    />
  );

  /**
   * 递归路由
   * @param routes
   * @returns {*}
   */
  function mapRoutes(routeList, routePath) {
    //退出登录时，isAuthenticated为false
    console.log(isAuthenticated)
    if (!isAuthenticated) {
      // 如果是非登陆状态，重定向到登录页
      return <Redirect to={'/login'} />;
    } 
    return routeList.map((r) => {
      let newPath = r.path ? `${routePath}/${r.path}` : routePath;
      newPath = newPath.replace(/\/+/g, "/");
      if (r.children && r.children.length > 0) {
        return mapRoutes(r.children, newPath);
      } else {
        return renderRoute(r, newPath);
      }
    });
  }

  const child = mapRoutes(adminRouters, "/");
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
          <Layout>
            <Suspense fallback={<div  style={{ paddingTop: 100, textAlign: 'center' }} ><Spin tip="Loading..." size="large"/></div> }>
              <Switch>{child}</Switch>
            </Suspense>
          </Layout>
      </Switch>
     
    </Router>
  );
}

export default Main2;
