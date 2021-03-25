import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { About } from './About';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { Navbar } from './Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <div className='container'>
                    <Switch>
                        <Route exact path='/' component={HomeScreen}></Route>
                        <Route exact path='/about' component={About}></Route>
                        <Route exact path='/login' component={LoginScreen}></Route>
                        {/* <Route component={HomeScreen}></Route> */}
                        <Redirect to='/' />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
