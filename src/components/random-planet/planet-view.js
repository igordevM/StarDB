import React from 'react';

import './random-planet.css';

import ErrorBoudry from '../error-boudry';




const PlanetView = ({planet, errorMessage, spinner}) => {
    const {id, name, population, rotationPeriod, diameter} = planet; 
    
    const renderPlanet = () => {
        return (
            <React.Fragment>    
                <img className="random-planet-img" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                alt="random-planet-img"></img> 

                <div className="random-planet-info">
                    <h1>{name}</h1>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span>Population</span>
                            <span>{population}</span>  
                        </li>
                        <li className="list-group-item">
                            <span>Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span>Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>

                </div>  
            </React.Fragment> 
               
        );
    };

    const content = !(errorMessage || spinner) ? renderPlanet() : null;

    return (
        <div className="random-planet jumbotron">
            <ErrorBoudry>
                {content}
                {errorMessage}
                {spinner}
            </ErrorBoudry>
        </div>            
    );
};

export default PlanetView;