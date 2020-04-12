import React from 'react';

import './item-details.css';

import ErrorBoudry from '../error-boudry';



const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span>{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};


const ItemDetails = (props) => {
    
    const {imgUrl, item, isSelected, errorMessage, spinner} = props;
    const children = props.children;

    const renderDitails = () => {
        return (
            <>
                <img className="item-details-img" src={imgUrl} 
                alt="item"></img> 

                <div className="item-details-info">
                    <h4>{item.name}</h4>

                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(children, (child) => {
                                return React.cloneElement(child, {item}) ;
                            })
                        }
                    </ul>

                </div>
            </>
        );
    };

    const content = !(errorMessage || spinner) ? renderDitails() : null;
    
    if (isSelected === false) {
        return(
            <div className="item-details jumbotron">
                <span>Biba boba</span>
            </div>           
        );
    };

    return (
        <ErrorBoudry>
            <div className="item-details jumbotron">
                {content}
                {errorMessage}
                {spinner}
                
            </div>
        </ErrorBoudry>
       
    );

};

export {
    Record
};

export default ItemDetails;