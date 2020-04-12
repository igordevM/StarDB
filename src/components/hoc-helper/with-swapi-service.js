import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';



const withSwapiService = (metod) => (Wrapped) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {   
                    (swapiService) => {
                        const serviceProps = metod(swapiService);
                        return (
                            <Wrapped {...props} {...serviceProps} />
                        );
                    }
                }
            </SwapiServiceConsumer>
        );
   
    };
};

export default withSwapiService;