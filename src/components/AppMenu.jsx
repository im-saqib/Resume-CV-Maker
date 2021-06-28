import React  from 'react'

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Toolbar, Button } from '@material-ui/core';


export default function Menu (props) {
    
    let value = props.value;
    value = value-2;
        return (
            <div> 
                <AppBar position="static"
                    style={{
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        color: '#0B0105'
                    }}
                >
                <Toolbar>
                    <Tabs value={value} >
                    <Tab label="Perosnal Details"/>
                    <Tab label="Education Details"/>
                    <Tab label="Jobs Experience" />
                    <Tab label="Other Details" />
                    <Tab label="Upload Photo" />
                    <Tab label="Confirm" />
                    <Tab label="Layout" />
                    </Tabs>
                </Toolbar>
                </AppBar>
            </div>
        )
}
