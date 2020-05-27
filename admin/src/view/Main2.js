/**
 * 参考：F:\web-project\react-project\react-blog-gershonv	
 * 参考：F:\web-project\react-project\react-blog-biaochenxuying\blog-react
 * 1、创建Layout.js组件用于遍历菜单、权限、token路由判断
 * 2、在当前页面中引入routes.js配置文件，用于配置react的路由组件映射
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import adminRouters from "../router/adminRouters";
import Login from "./Login";
import Layout from "../components/layout";
function Main2() {

const renderRoute = (r,newPath) => (
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
  function mapRoutes(routeList,routePath){
    return routeList.map( r => {
        let newPath = r.path
        ? `${routePath}/${r.path}`
        : routePath;
        newPath = newPath.replace(/\/+/g, "/");
      if (r.children && r.children.length > 0) {
        
        return mapRoutes(r.children,newPath)
      } else {
        return renderRoute(r,newPath)
      }
    })
  };

  
  const child = mapRoutes(adminRouters,"/");

  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Layout>
        {child}
        </Layout>
        
      </Switch>
    </Router>
  );
}

export default Main2;
