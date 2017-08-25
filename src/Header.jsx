import PropTypes from 'prop-types';
import React from 'react';

export class Header extends React.Component {
    render() {
        const menu = this.props.menu;
        const submenu = this.props.submenu;
        var header = (typeof menu === 'undefined') ? '' : menu + ' - ' + submenu;

        return (
            <div id='headerSection' >
        		<h1>{header}</h1>
        	</div>
        );
    }
}

Header.propTypes = {
    menu: React.PropTypes.string,
    submenu: React.PropTypes.string
};