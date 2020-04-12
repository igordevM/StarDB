import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends React.Component {
    render() {
        return (
       
            <div className="header">
                
                <h3 className="logo"> 
                    <Link to="/"> Star DB </Link>                    
                </h3>

                <div className="header-nav">
                    <ul className="nav">
                        <div className="nav-link">
                            <Link to="/people/">People</Link>
                        </div>
                        <div className="nav-link">
                            <Link to="/planets/">Planets</Link>
                        </div>
                        <div className="nav-link">
                            <Link to="/starships/">Starships</Link>
                        </div>
                        <div className="nav-link">
                            <Link to="/login">Login</Link>
                        </div>
                        <div className="nav-link">
                            <Link to="/secret">Secret</Link>
                        </div>
                                          
                    </ul>
                </div>

            </div>
        
            
            
        );
    };
};