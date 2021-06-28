import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import React from 'react'

import {useStyles} from './theme.js';
export default function Header() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton}>
                        
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Resume Maker
                    </Typography>
                <Button color="inherit"><a href="/">Home</a></Button>
                <Button color="inherit"><a href="/">FAQ</a></Button>
                <Button color="inherit"><a href="/">About</a></Button>
        </Toolbar>
      </AppBar>
        </>
    )
}
