import React, { Component } from 'react';
import {Form, Field, ErrorMessage, FieldArray , useFormikContext} from "formik";
import {ThemeProvider,Typography, Button, Grid, ButtonBase, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import theme from '../theme.js';

export default class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
      };
      back = (e) => {
        e.preventDefault();
        this.props.prevStep();
      };
      
    render() {
        const {
            name,
            fatherName,
            DoB,
            age,
            eMail,
            web,
            sMedia,
            mobile,
            address,
            education,
            experience,
            oQual,
            skills,
            hobbies,
            tagLine,
          } = this.props.values;
          const input = {
            name,
            fatherName,
            DoB,
            age,
            eMail,
            web,
            sMedia,
            mobile,
            address,
            education,
            experience,
            oQual,
            skills,
            hobbies,
            tagLine,
          };
        return (
            <ThemeProvider theme={theme}>
                <Typography variant='h4' align='left' >Review your Credentials</Typography>
                <Form>
                {()=>{
                    useFormikContext();
                    return (
                <div>
                    <Grid container>
                        <Grid item xs={4}><Typography display='inline'>Name: </Typography></Grid>
                        <Grid item xs={4}><Typography  display='inline' >Muhammad Saqib</Typography></Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={4}><Typography display='inline'>Name: </Typography></Grid>
                        <Grid item xs={4}><Typography  display='inline' >Muhammad Saqib</Typography></Grid>
                    </Grid>
                </div>
                    )
                }}
</Form>


                <div>
                <Button variant='contained' onClick={this.continue}>Continue</Button>
                <Button variant='contained' onClick={this.back}>Back</Button>
                </div>
            </ThemeProvider>
        )
    }
}
