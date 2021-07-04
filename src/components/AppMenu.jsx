import React  from 'react'

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Toolbar } from '@material-ui/core';

import {useStyles} from './theme.js';

// This is Application Menu. For Website Menu go to Header.jsx in components folder
export default function Menu (props) {
    const classes = useStyles();
    let value = props.value;
    value = value-2;
        return (
            <div> 
                <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Tabs value={value} className={classes.root}>
                    <Tab className={classes.title} label="Perosnal Details"/>
                    <Tab className={classes.title} label="Education Details"/>
                    <Tab className={classes.title} label="Jobs Experience" />
                    <Tab className={classes.title} label="Other Details" />
                    <Tab className={classes.title} label="Upload Photo" />
                    <Tab className={classes.title} label="Confirm Credentials" />
                    <Tab className={classes.title} label="Select Layout" />
                    </Tabs>
                </Toolbar>
                </AppBar>
            </div>
        )
}
