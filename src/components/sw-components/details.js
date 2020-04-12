import ItemDetails from '../item-details';
import { withSwapiService, WithDetailsData, withChildren }from '../hoc-helper';



const mapPersonMetodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImgUrl: swapiService.getPersonImg
    };
};

const mapPlanetMetodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImgUrl: swapiService.getPlanetImg
    };
};

const mapStarshipMetodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImgUrl: swapiService.getStarshipImg
    };
};



const personChildren = [
    {field:"height", label:"Height :"},
    {field:"mass", label:"Mass :"},
    {field:"birthYear", label:"Birth Year :"},
    {field:"gender", label:"Gender :"},
    {field:"eyeColor", label:"Eye Color :"},
    {field:"hairColor", label:"Hair Color :"}
];

const starshipChildren = [
    {field:"model", label:"Model :"},
    {field:"cargoCapacity", label:"Cargo Capacity :"},
    {field:"costInCredits", label:"Cost in Credits :"},
    {field:"length", label:"Length :"},
    {field:"manufacturer", label:"Manufaturer :"},
    {field:"maxAtmospheringSpeed", label:"Max Atmosphering Speed :"},
    {field:"passengers", label:"Passengers :"},
    {field:"crew", label:"Crew :"}
    
];

const planetChildren = [
    {field:"population", label:"Population :"},
    {field:"rotationPeriod", label:"Rotation Period :"},
    {field:"diameter", label:"Diameter :"}
]



const PersonDetails = withSwapiService(mapPersonMetodsToProps)(
                                        WithDetailsData()(
                                                        withChildren(personChildren)(ItemDetails)));


const PlanetDetails = withSwapiService(mapPlanetMetodsToProps)(
                                        WithDetailsData()(
                                                        withChildren(planetChildren)(ItemDetails)));

const StarshipDetails = withSwapiService(mapStarshipMetodsToProps)(
                                        WithDetailsData()(
                                                        withChildren(starshipChildren)(ItemDetails)));


export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};