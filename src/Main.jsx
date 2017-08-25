import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

export class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main id='mainSection'>
                <Route exact={true} path='/' component={Home} />
                <Route path='/menu/:subMenu' component={TestRoute} />
            </main>
        );
    }
}

Main.propTypes = {
    menu: React.PropTypes.string,
    submenu: React.PropTypes.string
};

class Home extends React.Component {
    render(){
        return <span>Welcome to the home page of React-IV-E.</span>;
    }
}

class TestRoute extends React.Component {
    render() {
        return <div>{this.props.match.params.menu}/{this.props.match.params.subMenu} section detected.</div>;
    }
}