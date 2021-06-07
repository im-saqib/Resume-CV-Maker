import { AppBar, Toolbar, IconButton, Button, Grid, Typography } from '@material-ui/core';
import React from 'react'

import {useStyles} from './theme.js';

export default function Header() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                        
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Resume Maker
                    </Typography>
                <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
        </>
    )
}
