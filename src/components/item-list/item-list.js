import React from 'react';

import ErrorBoudry from '../error-boudry';

const ItemList = (props) => {
    
    
    const renderList = (items) => {
        return items.map((el) => {
            const { id } = el;
            const label = props.children(el);
            
            return ( 
                <li 
                    type="button" 
                    key={id} 
                    className="list-group-item list-group-item-action"
                    onClick={() => props.onItemSelected(id)}>
                    {label}
                </li>                
            );
        });
    };



    const {errorMessage, spinner, items} = props;
    const content = !(errorMessage || spinner) ? renderList(items) : null;

    return (
        <ErrorBoudry>
                <div className="item-list">
                <ul className="list-group">
                    {errorMessage}
                    {spinner}
                    {content}
                </ul>              
            </div>
        </ErrorBoudry>
        
    );

};

export default ItemList;

