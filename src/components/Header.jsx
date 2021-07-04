import React, { useState } from 'react'
import { AppBar, Toolbar, Button, Typography, IconButton } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

import {useStyles} from './theme.js';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
// const useStyles = makeStyles((theme)=>({
//     root:{

//     },
//     menuButton:{
//         display: 'none',
//         visibility: 'none',
//         [theme.breakpoints.down(800)]: {
//             display: 'inline-block',
//         },
//     }
// }))

// This is website Menu. Application Menu is AppMenu in components folder
export default function Header(props) {
    const classes = useStyles();
    const [selected, setSelected] = useState(false);
    // let toggle = selected ? classes.title : classes.nav;
    let toggle = classes.nav;
    return (
        <>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    
                    <Typography variant='h5' className={classes.title}>
                        Resume Maker
                    </Typography>
                <nav id='navigation' className={`${selected && toggle}`}>
                    <List className={`${selected ? classes.visible : classes.list}`}>
                        {/* <Typography variant='h5' className={classes.menuButton}>
                            Resume Maker
                        </Typography> */}
                        <ListItem className={`${selected ? classes.visible : classes.list}`}>
                                <Button onClick={(e)=> {
                                    e.preventDefault();
                                    props.nextStep();
                                }} color="inherit"><Typography >Make Resume</Typography></Button>
                            
                        </ListItem>
                        <ListItem className={`${selected ? classes.visible : classes.list}`}>
                            <Link to="/">
                                <Button color="inherit"><Typography >Home</Typography></Button>
                            </Link>
                        </ListItem>
                        <ListItem className={`${selected ? classes.visible : classes.list}`}>
                            <Link to="/privacypolicy">
                                <Button color="inherit"><Typography >Privacy Policy</Typography></Button>
                            </Link>
                        </ListItem>
                        <ListItem className={`${selected ? classes.visible : classes.list}`}>
                            <Link to="/about">
                                <Button color="inherit"><Typography>About</Typography></Button>
                            </Link>
                        </ListItem>
                    </List>
                </nav>
                <IconButton  edge='end' className={classes.menuButton} color="inherit">
                <ToggleButton
                    value="check"
                    selected={selected}
                    onChange={() => {
                        setSelected(!selected);
                    }}
                >
                    <MenuIcon />
                </ToggleButton>
                </IconButton>
               
        </Toolbar>
      </AppBar>
        </>
    )
}
