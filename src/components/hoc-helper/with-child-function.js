import React from 'react';

const withChildFunction = (fun) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fun}
            </Wrapped>
        );
    };
};

export default withChildFunction;