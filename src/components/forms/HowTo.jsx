import React, { Component } from 'react'
import {
    ThemeProvider, Typography, List, ListItem, ListItemText, Button,
    Card, CardContent, Divider, Grid } from '@material-ui/core';

import theme from '../theme';

export default class HowTo extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
      };
      back = (e) => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Card>
                                <CardContent>
                                <Typography gutterBottom color='primary' align='center' variant='h3'>
                                    How to use?
                                </Typography>
                                <Divider />
                                <Typography color='primary' align='left' variant='h6'>
                                    Make an Awesome Resume in 1..2..3..
                                </Typography>
                                <Typography color='textPrimary' align='left' variant='body1'>
                                    <List>
                                        <ListItem>
                                            Enter Your Credentials
                                        </ListItem>
                                        <ListItem>
                                            Select Layout
                                        </ListItem>
                                        <ListItem>
                                            Print or Save as PDF
                                        </ListItem>
                                    </List>
                                    <Divider />
                                </Typography>
                                    <Typography color='secondary' align='justify' variant='h6'>
                                        Do Not Refresh your browser window while entering your credentials.
                                        You will loose all entered data if you refresh browser page.
                                        Use Continue and Back buttons at bottom of page to scroll around application.
                                    </Typography>
                                    <Divider />
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
                            <Divider />
                            <Card>
                  <CardContent>
              <Grid container direction='row' justify="space-around" alignItems="center">
                <Grid item xs={6} lg={3}>
                    <Button variant='contained' color='primary' fullWidth type='submit' onClick={this.continue}>Continue</Button>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Button variant='contained' color='secondary' fullWidth onClick={this.back}>Back</Button>
                </Grid>
              </Grid>
                  </CardContent>
                </Card>
            </ThemeProvider>
        )
    }
}
