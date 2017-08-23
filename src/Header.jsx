import React from 'react';

export class Header extends React.Component {
    render() {
    	const menu = this.props.menu;
    	const submenu = this.props.submenu;
    	var header = (typeof menu === 'undefined') ? '' : menu + ' - ' + submenu;

    	// if(typeof menu === 'undefined'){
    	// 	header = '';
    	// }else{
    	// 	header = menu + ' - ' + submenu;
    	// }

        return <h1>{header}</h1>;
    }
}

Header.propTypes = {
    menu: React.PropTypes.string,
    submenu: React.PropTypes.string
};