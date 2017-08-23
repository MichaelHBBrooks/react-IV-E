import React from 'react';

const nav = {
    menus: [{
            name: 'Test Repository',
            list: ['Plans', 'Validations']
        },
        {
            name: 'Configurations',
            list: ['Environments', 'Users', 'Data']
        },
        {
            name: 'Servers',
            list: ['Servers', 'Things']
        }
    ]
};

export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: undefined,
            submenu: undefined
        };
        this.clicky = this.clicky.bind(this);
    }

    clicky(menu, submenu) {
        this.props.onClick(menu, submenu);
    }

    render() {
        const test = nav.menus.map(function(menu, x) {
            return <NavMenu key={menu.name+x} menu={menu.name} submenu={menu.list} clicky={this.clicky} />;
        }.bind(this));
        return (
            <nav>
                {test}
            </nav>
        );
    }
}

class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmenuOnClick = this.handleSubmenuOnClick.bind(this);
    }

    handleSubmenuOnClick(submenu) {
        this.props.clicky(this.props.menu, submenu);
    }

    render() {
        const submenus = this.props.submenu.map((submenu, x) => {
            return <NavSubMenu key={submenu+x} menu={this.props.menu} submenu={submenu} onClick={this.handleSubmenuOnClick} />;
        });
        return (
            <div>
                <div>{this.props.menu}</div>
                {submenus}
            </div>
        );
    }
}

class NavSubMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(e) {
        this.props.onClick(this.props.submenu);
    }

    render() {
        return <div onClick={this.handleOnClick}>{this.props.submenu}</div>;
    }
}