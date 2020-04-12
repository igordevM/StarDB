import React from 'react';

import SwapiService from '../../services/swapi-service';
import { WithListData, withChildFunction } from '../hoc-helper';

import ItemList from '../item-list';



const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets,
} = swapiService;



const renderItem = ({name}) => name; 


const PersonList = WithListData(getAllPeople)(
                            withChildFunction(renderItem)(ItemList));

const PlanetsList = WithListData(getAllPlanets)(
                            withChildFunction(renderItem)(ItemList));

const StarshipsList = WithListData(getAllStarships)(
                              withChildFunction(renderItem)(ItemList));


export {
    PersonList,
    PlanetsList,
    StarshipsList
};