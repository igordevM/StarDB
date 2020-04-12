import PlanetView from './planet-view';
import { withSwapiService, WithRandomPlanetData } from '../hoc-helper';



const mapPlanetMetodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet
    };
};


const RandomPlanet = withSwapiService(mapPlanetMetodsToProps)(
                                        WithRandomPlanetData()(PlanetView)
);

export default RandomPlanet;