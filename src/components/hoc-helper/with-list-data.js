import React from 'react';

import Spinner from '../spinner';
import Error from '../error';


const WithListData = (getData) => (View) => {
    return class extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                itemList: [],
                loading: true,
                error: false
            };
        };
    
        componentDidMount() {
            
            getData()
                .then((itemList) => {
                    this.onPeopleLoaded(itemList)
                })
                .catch(this.onError);        
        };
    
        onPeopleLoaded = (itemList) => {
            this.setState({
                itemList: itemList,
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

        render() {
            const {itemList, error, loading} = this.state;
            const errorMessage = error ? <Error /> : null;
            const spinner = loading ? <Spinner /> : null;
            
            return (
                <View 
                { ...this.props} 
                errorMessage={errorMessage} 
                spinner={spinner}
                items={itemList} />
            );
        };
    };
};

export default WithListData;