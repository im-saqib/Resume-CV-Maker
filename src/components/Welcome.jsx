import React, { Component } from 'react';


import {
    ThemeProvider, Typography, Card, Button, CardContent,
    List ,ListItem, ListItemText ,Divider, Grid, Link
} from '@material-ui/core';

import theme from './theme';

import Header from './Header.jsx';
import FrontImg from './FrontImg.jsx';

export default class Welcome extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
      };
      
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Header />
                <Grid
                    container
                    // direction="column"
                    justify="center"
                    alignItems="stretch"
                >
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant='h6' display='inline'>Free Resume Maker</Typography>
                                <Button color='primary' onClick={this.continue}>Start Here</Button>
                            </CardContent>
                        </Card>
                       <Grid container>
                           <Grid item sm={12} lg={6}>
                <Card>
                    <CardContent>
                           <Typography variant='h6' color='secondary'>
                            Please read these instructions carefully...
                        </Typography>
                            <List >
                                <ListItemText color=''>Personal Details</ListItemText>
                                <ListItem>Enter your personal information e.g. your full name, father name, contact details etc.</ListItem>
                                <ListItemText color=''>Education Details</ListItemText>
                                <ListItem>Enter details about accademic career e.g. passed or continued degrees / school diplomas</ListItem>
                                <ListItemText color=''>Jobs Experience</ListItemText>
                                <ListItem>Enter details about work/job experiences</ListItem>
                                <ListItemText color=''>Other Details</ListItemText>
                                <ListItem>
                                    This page contains different fields, you can enter details about your professinal diplomas , your skills, hobbies and your aim.
                                </ListItem>
                            </List>
                    </CardContent>
                </Card>
                           </Grid>
                           <Grid item sm={12} lg={6}>
                            <FrontImg />
                           </Grid>
                       </Grid>

                    </Grid>
                    <Grid item xs={12}>
                <Card >
                    <Divider/>
                    <Typography variant='body2' align='center'>© Copyright 2021</Typography>
                    <Typography variant='body2' align='center'>This application is proudly developed by</Typography>
                    <Typography variant='body1' align='center' color='secondary'>Muhammad Saqib</Typography>
                    <Typography variant='body2' align='center'>
                    Follow me on <Link href='https://www.github.com/im-saqib'>github</Link> and <Link href='https://www.facebook.com/amazonwebservicespk'>
                    Facebook</Link> for more free, open source awesome projects.
                    </Typography>
                </Card>
                    </Grid>
                </Grid>
            </ThemeProvider>
        )
    }
}
