import React  from 'react'

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Toolbar } from '@material-ui/core';

export default function Menu (props) {
    
    let value = props.value;
    value = value-2;
        return (
            <div> 
                <AppBar position="static" color='primary'>
                <Toolbar>
                    <Tabs value={value} color='default' fullWidth={true}>
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
