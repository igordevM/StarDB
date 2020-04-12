import React from 'react';

import { Record } from '../item-details';

const withChildren = (children) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {children.map((el, i) => (
                        <Record key={i} field={el.field} label={el.label} />
                    )
                )}
            </Wrapped>
        );
    };
};

export default withChildren;