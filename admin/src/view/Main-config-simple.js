  //参考：F:\web-project\react-project\react-blog-biaochenxuying\blog-react
  import React from "react";
  import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
  import configRouters from "../router/config";
  import Login from "./Login";
  import Layouts from "../components/layout/Layouts";
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Layouts>
          {configRouters.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Layouts>
      </Switch>
    </Router>
  );

export default Main;
