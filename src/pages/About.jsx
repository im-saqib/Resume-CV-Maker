import React from 'react';

import {
    ThemeProvider, makeStyles, Typography, Grid, Paper,
     List, ListItem, Card, CardContent, Divider, Link, } from '@material-ui/core';

import PersonPinIcon from '@material-ui/icons/PersonPin';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';

import Footer from '../components/Footer';
import { pages } from '../components/theme';

const useStyles =makeStyles((theme)=>({
    root:{
        display: 'flex',
        '& > *': {
            margin: pages.spacing(5),
          },
    }
}))

export default function About() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={pages}>
            <Paper >
                                <Typography gutterBottom color='primary' align='center' variant='h3'>
                                    Resume Maker
                                </Typography>
                                <Typography color='secondary' align='center' variant='subtitle1'>
                                        * This application DOES NOT store any of your entered data. Read more on Privacy Policy page.
                                </Typography>
                <Grid container justify='center' alignContent='center' alignItems='center' className={classes.root}>
                    <Grid item xs={12}>
                    <Grid container justify='center' alignContent='center' alignItems='center'>
                        <Grid item xs={6} lg={6} sm={11}>
                            <Card>
                                <CardContent>
                                <Typography color='secondary' align='center' variant='h3'>
                                    Version "Beta"
                                </Typography>
                                <Divider />
                                <Typography color='secondary' align='left' variant='h6'>
                                    Version 0.0.1
                                </Typography>
                                <Typography color='textPrimary' align='justify' variant='body1'>
                                    This application is currently a beta version. It may contain bugs
                                     (Not that hurt your system/ mobile) but this application may crash or
                                     slow down sometimes. If you encounter any bugs please contact at given
                                     email address below. Resume Maker is an open-source and free to use application.
                                    Complete source code is available at on GitHub profile.
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} lg={6} sm={11}>

                        </Grid>


                        <Grid item xs={6} lg={6} sm={11}>
                        </Grid>
                        <Grid item xs={6} lg={6} sm={11}>
                        <Card>
                                <CardContent>
                                <Typography gutterBottom color='primary' align='center' variant='h3'>
                                    Planned Upgrades
                                </Typography>
                                <Divider />
                                <Typography color='primary' align='left' variant='h6'>
                                    Layouts & Mobile Application
                                </Typography>
                                <Typography color='textPrimary' align='left' variant='body1'>
                                    Currently Resume Maker has two layouts to choose from. With future upgrades
                                     i'll add two more layouts. I'm also looking forward to launch Android and
                                     iOS applications. Obviously this is going to take sometime...
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={6} lg={6} sm={11}>
                            <Card>
                                <CardContent>
                                <Typography gutterBottom color='primary' align='center' variant='h3'>
                                    Developer
                                </Typography>
                                <Divider />
                                <Typography gutterBottom color='textPrimary' align='left' variant='h6' style={{fontWeight:700}}>
                                    Muhammad Saqib
                                </Typography>
                                    <Link href='https://www.github.com/im-saqib'><GitHubIcon /></Link>
                                
                                <Typography color='textPrimary' align='justify' variant='body1'>
                                    Hi, I'm Muhammad Saqib a Full Stack Application and Web Developer. I have
                                     8 years expereince in WordPress Blog/ Website designing & development
                                     and 1 year expereince in MERN (MongoDb, ExpressJS, ReactJS, NodeJS) Stack application and web development.
                                    This application is developed using React JS and Material UI.
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6} lg={6} sm={11}>

                        </Grid>

                        
                        <Grid item xs={6} lg={6} sm={11}>
                        </Grid>
                        <Grid item xs={6} lg={6} sm={11}>
                        <Card>
                                <CardContent>
                                <Typography gutterBottom color='primary' align='center' variant='h3'>
                                    Contact
                                </Typography>
                                <Divider />
                                <Typography gutterBottom color='primary' align='left' variant='h6'>
                                    Found a Bug or Want an Awesome Application or Website?
                                </Typography>
                                <Typography color='textPrimary' align='left' variant='body1'>
                                    Contact through email or visit.
                                </Typography>
                                    <List>
                                    <Link href='https://www.github.com/im-saqib'>
                                        <ListItem>
                                            <GitHubIcon />
                                            <Typography variant='body2'>GitHub</Typography>
                                        </ListItem>
                                        </Link>
                                        <ListItem>
                                            <MailOutlineIcon />
                                            <Typography variant='body2'> saqib.mirza532@gmail.com</Typography>
                                        </ListItem>
                                        <ListItem>
                                            <PersonPinIcon color='textPrimary' />
                                            <Typography variant='body2'>Nova Tech Solutions 1065-A Bilal Town Jhelum Pakistan</Typography>
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
             <Footer />
            </Paper>
        </ThemeProvider>
    )
}
