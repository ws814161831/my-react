import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Login from './Login'
import BasicLayout from '../components/layout/BasicLayout'
// import Error404 from "./error/404";
function Main() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/" component={BasicLayout} />
                    {/* <Route path="*" component={Error404} /> */}
                    {/* <Redirect from="*" to="/404"></Redirect> */}
                </Switch>
            </Router>
        </div>
    )
}

export default Main
