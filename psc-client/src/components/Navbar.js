import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// ADD NEW PAGES HERE AND APPJS
class navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar className="nav-container">
                    <Button color="inherit" component = {Link} to="/">Home</Button>
                    <Button color="inherit" component = {Link} to="/ships">Ships</Button>
                    <Button color="inherit" component = {Link} to="/login">Login</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default navbar
