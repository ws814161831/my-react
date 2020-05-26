import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import BasicLayout from '../components/layout/BasicLayout'

function Main() {
    return (
        <div>
            <Router>
                <Route path="/login" exact component={Login} />
                <Route path="/"  component={BasicLayout} />
            </Router>
        </div>
    )
}

export default Main
