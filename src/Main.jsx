import React from 'react';

export class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <main>Main section</main>;
    }
}

Main.propTypes = {
    menu: React.PropTypes.string,
    submenu: React.PropTypes.string
};