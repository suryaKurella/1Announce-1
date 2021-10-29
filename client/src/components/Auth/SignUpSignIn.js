import React from 'react';
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext";
import Signup from "./Signup";
import Login from "./Login";
import BroadcastForm from "../Broadcast/BroadcastForm";

/**
 *
 * @returns {JSX.Element}
 * @name:SignUpSignIn
 * @desc: This function handles both Sign In and Sign Up for User Authentication,
 * we have Signup nad Login Functional Components embeddeded in this parent component
 */
const SignUpSignIn = () => {
    return (
        <Container className={'d-flex align-items-center justify-content-center'}
                   style={{minHeight: '100vh', minWidth: '100%'}}>
            <div className={'w-100'}>
                <Router>
                    <AuthProvider>
                        <Switch>
                            <Route exact path={'/'} component={Signup}/>
                            <Route path={'/announceform'} component={BroadcastForm}/>
                        </Switch>
                    </AuthProvider>
                </Router>
            </div>

        </Container>
    );
};

export default SignUpSignIn;
