import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import Row from '../row';
import ErrorBoudry from '../error-boudry';
import {
    PersonList,
    PlanetsList,
    StarshipsList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components';



const Main = ({ page, history, match }) => {

    const onItemSelected = (id) => {
        history.push(`/${page}/${id}`);
    };

    const selectedItem = match.params.id;

    const right = (page) => {    
        switch (page) {
            case 'people':
                return (
                    <PersonList 
                    onItemSelected={onItemSelected}/>
                );
            case 'planets':
                return (
                    <PlanetsList 
                    onItemSelected={onItemSelected}/>
                );
            case 'starships':
                return (
                    <StarshipsList 
                    onItemSelected={onItemSelected}/>
                );
            default: 
                return "Biba boba";
            };
    };
    
    const left = (page) => {    
        switch (page) {
            case 'people':
                return (
                    <PersonDetails 
                    itemId={selectedItem}/>
                );
            case 'planets':
                return (
                    <PlanetDetails 
                    itemId={selectedItem}/>
                );
            case 'starships':
                return (
                    <StarshipDetails 
                    itemId={selectedItem}/>
                );
            default: 
                return "Biba boba";
            };
    };

    if (isNaN(selectedItem) && selectedItem !== undefined) {
        return (
            <Redirect to="/error" />
        );
    }; 
   
    return (
        <div className="people">
            <ErrorBoudry>
                <Row
                    right={right(page)} 
                    
                    left={left(page)}/>
            </ErrorBoudry>               
        </div>

    );
};


export default withRouter(Main);