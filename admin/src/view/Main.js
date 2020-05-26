/**
 * 参考：F:\web-project\react-project\react-blog-gershonv	
 * 1、创建Layout.js组件用于遍历菜单、权限、token路由判断
 * 2、在当前页面中引入routes.js配置文件，用于配置react的路由组件映射
 */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import adminRouters from "../router/adminRouters";
import Login from "./Login";

function Main() {
  // 解构 route
  function renderRoutes(routes, contextPath) {
    const childs = [];

    const renderRoute = (item, routeContextPath) => {
      let newContextPath = item.path
        ? `${routeContextPath}/${item.path}`
        : routeContextPath;
      newContextPath = newContextPath.replace(/\/+/g, "/");
      if (!item.component) return;

      if (item.children) {
        /**
         * 1、首先遍历循环第一层路由
         * 2、如果有children，就再调用遍历children，返回封装好的子路由 <Switch>{childs}</Switch>
         * 3、将返回的子路由通过Route render渲染
         */
        const childRoutes = renderRoutes(item.children, newContextPath);
        childs.push(
          <Route
            key={newContextPath}
            render={(props) => (
              <item.component {...props}>{childRoutes}</item.component>
            )}
            path={newContextPath}
          />
        );
        item.children.forEach((r) => renderRoute(r, newContextPath));
      } else {

        childs.push(
          <Route
            key={newContextPath}
            component={item.component}
            path={newContextPath}
            exact={item.exact}
          />
        );
      }
    };

    routes.forEach((item) => renderRoute(item, contextPath));

    return <Switch>{childs}</Switch>;
  }

  const child = renderRoutes(adminRouters, "/");

  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        {child}
      </Switch>
    </Router>
  );
}

export default Main;
