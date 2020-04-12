import React from 'react';
import { Redirect } from 'react-router-dom';

import './login.css';


const Login = ({ onLogin, isLogin }) => {
    
    if (isLogin) {
        return (
            <Redirect to='/' />
        );
    };

    return (
        <div className="login">
            <div className="jumbotron">
                <h2>Login to see secret page!</h2>
                <button 
                className="login-btn btn btn-primary"
                onClick={onLogin}>
                Login
                </button>
            </div>
        </div>
    );
};

export default Login;