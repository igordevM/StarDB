import React from 'react';

import Spinner from '../spinner';
import Error from '../error';



const WithDetailsData = () => (Wrapped) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                item: null,
                loading: true,
                error: false,
                imgUrl: null
            };
        };
    
        componentDidMount() {
            this.updateItem();
        };
    
        componentDidUpdate(prevProps) {
            if (this.props.itemId !== prevProps.itemId) { 
                this.setState({loading: true});
                this.updateItem();
            };
        };
    
        updateItem() {
            const {itemId, getData} = this.props;
         
            if (!itemId) {
                return;
            };      
            
            getData(itemId)
                .then((item) => {
                   this.onItemLoaded(item)
                })
                .catch(this.onError);
        };
    
        onItemLoaded = (item) => {
            const {getImgUrl} = this.props;
            
            this.setState({
                item: item,
                loading: false,
                error: false,
                imgUrl: getImgUrl(item)
            });
        };
    
        onError = () => {
            this.setState({
                loading: false,
                error: true
            });	
        };
    
        render() {
            const {item, loading, error, imgUrl} = this.state;

            const isSelected = this.props.itemId ? true : false; 
            const children = this.props.children;
            
    
            const errorMessage = error ? <Error /> : null;
            const spinner = loading ? <Spinner /> : null;
           
    
            return (
                
                <Wrapped 
                { ...this.props}
                isSelected={isSelected}
                children={children}
                errorMessage={errorMessage}
                spinner={spinner}
                item={item}
                imgUrl={imgUrl}
                />
                
               
            );
        };
    };
};

export default WithDetailsData;