import React from 'react';
import './row.css';


const Row = ({right, left}) => { 
    return (
        <div className="row ">
            <div className="items col-md-6">
                {right}
            </div>
            

            <div className="details col-md-6">
                {left}
            </div>
        
        </div>
    );
};

export default Row;