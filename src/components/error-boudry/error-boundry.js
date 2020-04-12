import React from 'react';
import Error from '../error';

export default class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    };

    componentDidCatch() {
        this.setState({hasError: true});
    };

    render() {
        const {hasError} = this.state;
       
        if (hasError) {
            return <Error />;
        };

        return (
            this.props.children
        );
    };
};