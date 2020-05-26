// import React, { Component } from 'react';
// import { Switch} from 'react-router-dom';

// import { FrontendAuth } from './FrontendAuth';
// import { routerConfig } from './config';


// class Routes extends Component {
//   render() {
//     return (
//       <Switch>
//         <FrontendAuth config={routerConfig} />
//       </Switch>
//     )
//   }
// }

// export default Routes
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './config'
import Layouts from '../components/layout/BasicLayout'
const RouteConfig = (
    <Router>
	    <Switch>
	      {/*<Route path="/" exact component={IndexList} />*/}
		    {routes.map((route, index) => (
			    <Route
				    key={index}
				    path={route.path}
				    exact={route.exact}
				    component={route.component}
			    />
		    ))}

	    </Switch>
        {/* <Layouts>
          {routers.map((r, key) => (
            <Route
              component={r.component}
              exact={!!r.exact}
              key={key}
              path={r.path}
            />
          ))}
        </Layouts> */}
    </Router>
);

export default RouteConfig;