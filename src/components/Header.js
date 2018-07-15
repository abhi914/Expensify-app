import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>To home page</NavLink>;
        <NavLink to="/create" activeClassName="is-active">To create page</NavLink>;
        <NavLink to="/edit" activeClassName="is-active">To edit page</NavLink>;
        <NavLink to="/help" activeClassName="is-active">To help  page</NavLink>;
    </header>
);

export default Header;