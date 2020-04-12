export default class SwapiService {

    _apiBase = 'https://swapi.co/api/';

    _imgBase = 'https://starwars-visualguide.com/assets/img/';

    _extractId(item) {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet) => {
      return {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      };
    };

    _transformPeople = (people) => {
      return {
        id: this._extractId(people),
        birthYear: people.birth_year,
        eyeColor: people.eye_color,
        gender:people.gender,
        hairColor: people.hair_color,
        height: people.height,
        mass: people.mass,
        name: people.name
      };
    };

    _transformShips = (ship) => {
      return {
        id: this._extractId(ship),
        cargoCapacity: ship.cargo_capacity,
        costInCredits: ship.cost_in_credits,
        crew: ship.crew,
        length: ship.length,
        manufacturer: ship.manufacturer,
        maxAtmospheringSpeed: ship.max_atmosphering_speed,
        model: ship.model,
        name: ship.name,
        passengers: ship.passengers
      };
    };
  
    getPersonImg = ({id}) => {
      return (`${this._imgBase}` + `characters/${id}.jpg`);
    };

    getStarshipImg = ({id}) => {
      return (`${this._imgBase}` + `starships/${id}.jpg`);
    };

    getPlanetImg = ({id}) => {
      return (`${this._imgBase}` + `planets/${id}.jpg`);
    };

    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
        throw new Error (`Error in ${this._apiBase}${url}, received ${res.status}`);
      };
      const body = await res.json();
      
      return body;
    };
    
    getAllPeople = async () => {
      const res = await this.getResource(`people/`);
      return res.results.map(this._transformPeople);
    };
  
    getPerson = async (id) => {
      const person = await this.getResource(`people/${id}/`);
      return this._transformPeople(person);
    };
  
    getAllStarships = async () => {
      const res = await this.getResource(`starships/`);
      return res.results.map(this._transformShips);
    };
  
    getStarship = async (id) => {
      const ship = await this.getResource(`starships/${id}/`);
      return this._transformShips(ship);
    };

    getAllPlanets = async () => {
      const res =  await this.getResource(`planets/`);
      return res.results.map(this._transformPlanet);
    };
     
    getPlanet = async (id) => {
      const planet = await this.getResource(`planets/${id}`);
      return this._transformPlanet(planet);
    };
   

};
  
