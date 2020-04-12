import React from 'react';

import Spinner from '../spinner';
import Error from '../error';


const WithRandomPlanetData = () => (Wrapped) => {
    return class extends React.Component {
        constructor() {
            super();
            this.state={
                planet: {},
                loading: true,
                error: false
            };
            
        };

        componentDidMount() {
            this.interval = setInterval(() => {
                this.updateState();
            }, 3000);
        };

        componentWillUnmount() {
            clearInterval(this.interval);
        };

        onPlanetLoaded = (planet) => {
            this.setState({ 
                planet: planet,
                loading: false,
                error: false
            });
        };

        onError = () => {
            this.setState({
                error: true,
                loading: false
            });
        };

        updateState() {
            const id = Math.floor(Math.random()*(19 - 2) + 2);
            const { getData } = this.props;
            getData(id)
                .then((planet) => {
                    this.onPlanetLoaded(planet)})
                .catch(this.onError)      
        };

        
        render() {
            const {planet, loading, error} = this.state; 
            const errorMessage = error ? <Error /> : null;
            const spinner = loading ? <Spinner /> : null;

            return (
                <Wrapped 
                {...this.props}
                errorMessage={errorMessage}
                spinner={spinner}
                planet={planet}
                />
             );
        };
    };
};

export default WithRandomPlanetData;