import React, { Component } from 'react'

import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography, Toolbar, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import classes from './../components/theme.js'

export default class Menu extends Component {
    render() {
         const value = this.props.value;
    console.log(this.state);
        return (
            <div className={classes.root}>         
                <AppBar position="static" color='primary'>
                <Toolbar>
                    <Typography className={classes.title} variant='h6' display='inline'>Resume</Typography>
                       
                    <Tabs value={value} color='default'>
                        <IconButton  className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                        </IconButton>
                    <Tab label="Welcome" />
                    <Tab label="Perosnal Details"/>
                    <Tab label="Education Details"/>
                    <Tab label="Jobs Experience" />
                    <Tab label="Other Details" />
                    <Tab label="Upload Photo" />
                    <Tab label="Confirm" />
                    <Tab label="Print to PDF" />
                    </Tabs>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
