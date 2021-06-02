import React, { Component } from 'react';


import {ThemeProvider, Paper, Typography, Button } from '@material-ui/core';
import theme from './theme'

// import Menu from './Menu.jsx'


export default class Welcome extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
      };
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Paper elevation = {3}>
                <Typography variant='h6' color='primary' align='center'>Desing Your Resume</Typography>
                
                <Button variant='contained' onClick={this.continue}>Continue</Button>
                </Paper>
            </ThemeProvider>
        )
    }
}
