// import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header.jsx';
import { Main } from './Main.jsx';
import { Nav } from './Nav.jsx';
import { BrowserRouter } from 'react-router-dom';
import '../stylesheets/main.scss';

class Root extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: undefined,
            submenu: undefined
        };
        this.navigateMenu = this.navigateMenu.bind(this);
    }

    navigateMenu(menu, submenu) {
        console.log('Entry clicked! ' + menu + '-' + submenu);
        this.setState({
            menu: menu,
            submenu: submenu
        });
    }

    render() {
        return (
        	<BrowserRouter>
	            <div>
		            <Header menu={this.state.menu} submenu={this.state.submenu} />
		            <Main menu={this.state.menu} submenu={this.state.submenu} />
	    	        <Nav onClick={this.navigateMenu} />
	            </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<Root />, document.getElementById('react-root'));