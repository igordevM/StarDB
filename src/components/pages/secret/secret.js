import React from 'react';
import { Redirect } from 'react-router-dom';



const Secret = ({ isLogin }) => {

    if (isLogin) {
        return (
            <div className="secret">
                <div className="jumbotron">
                    <h2>This is secret page!</h2>
                </div>
            </div>
        );
    };

    return (
        <Redirect to="/login" />
    );

};

export default Secret;