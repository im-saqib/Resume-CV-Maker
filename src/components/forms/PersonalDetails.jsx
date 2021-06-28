import React, { Component } from 'react';
import {Typography,Button, Grid, Card, CardContent, Divider} from '@material-ui/core';

import { TextField } from 'formik-material-ui';

import {Form, Field, ErrorMessage, FieldArray } from "formik";
// import * as Yup from "yup";

export default class PersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
      };
      back = (e) => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
        const ErrorMsg = (props) => {
            return <div className='error'>{props.children}</div>;
          };
        
        return (
            <div>
                    {/* <Typography variant='h6' align='center' color='action' >Personal Details</Typography> */}
                <div>
                    <Form>
                        <div className='form-control'>
                    <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                            <Typography variant='h6' align='left' htmlFor='name'>Name</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Field component={TextField} fullWidth color='secondary' autoFocus type='text' id='name' name='name' />
                            <ErrorMessage name='name' component={ErrorMsg} />
                        </Grid>
                        </Grid>
                        </CardContent>
                    </Card>
                        </div>
                <div className='form-control'>
                <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                    <Typography variant='h6' align='left' htmlFor='fatherName'>Father Name</Typography>
                    </Grid>
                        <Grid item xs={6}>
                    <Field component={TextField} fullWidth color='secondary' type='fatherName' id='fatherName' name='fatherName' />
                    <ErrorMessage name='fatherName' component={ErrorMsg} />
                        </Grid>
                        </Grid>
                        </CardContent>
                    </Card>
                </div>
                <div className='form-control'>
                <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                    <Typography variant='h6' align='left' htmlFor='DoB'>Date of Birth</Typography>
                    </Grid>
                        <Grid item xs={6}>
                    <Field component={TextField} fullWidth color='secondary' type='DoB' id='DoB' name='DoB' />
                    <ErrorMessage name='DoB' component={ErrorMsg} />
                        </Grid>
                        </Grid>
                        </CardContent>
                    </Card>
                </div>
                <div className='form-control'>
                <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                    <Typography variant='h6' align='left' htmlFor='age'>Age</Typography>
                    </Grid>
                        <Grid item xs={6}>
                    <Field component={TextField} fullWidth color='secondary' type='age' id='age' name='age' />
                    <ErrorMessage name='age' component={ErrorMsg} />
                        </Grid>
                        </Grid>
                        </CardContent>
                    </Card>
                </div>
                <div className='form-control'>
                <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                    <Typography variant='h6' align='left' htmlFor='eMail'>E-Mail</Typography>
                    </Grid>
                        <Grid item xs={6}>
                    <Field component={TextField} fullWidth color='secondary' type='eMail' id='eMail' name='eMail' />
                    <ErrorMessage name='eMail' component={ErrorMsg} />
                        </Grid>
                        </Grid>
                        </CardContent>
                    </Card>
                </div>
                <div className='form-control'>
                <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                    <Typography variant='h6' align='left' htmlFor='web'>Web Site</Typography>
                    </Grid>
                        <Grid item xs={6}>
                    <Field component={TextField} fullWidth color='secondary' type='web' id='web' name='web' />
                    <ErrorMessage name='web' component={ErrorMsg} />
                        </Grid>
                        </Grid>
                        </CardContent>
                    </Card>
                </div>
                <div className='form-control'>
                <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                <Typography variant='h6' align='left' htmlFor='mobile'>Scoial Media</Typography>
                </Grid>
                        <Grid item xs={6}>
                <FieldArray name='sMedia'>
                    {(fieldArryaProps)=> {
                        const {push, remove, form} = fieldArryaProps;
                        const { values } = form;
                        const { sMedia } = values;
                        return(
                            <div>
                                {sMedia.map((sMedia, index)=>(
                                    <div key={index}>
                                        <Field component={TextField} fullWidth color='secondary' name={`sMedia[${index}]`} />
                                        {index > 0 && (
                                            <Button variant='contained' color='secondary' onClick={()=>remove(index)}>-</Button>
                                        )}
                                        <Button variant='contained' color='primary' onClick={()=>push('')}>+</Button>
                                    </div>
                                ))}
                            </div>
                        )
                    }}
                </FieldArray>
                        </Grid>
                        </Grid>
                        </CardContent>
                    </Card>
                </div>
                <div className='form-control'>
                <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                    <Typography variant='h6' align='left' htmlFor='mobile'>Phone Number</Typography>
                    </Grid>
                        <Grid item xs={6}>
                    <FieldArray name='mobile'>
                    {(fieldArrayProps)=>{
                        const {push, remove, form} = fieldArrayProps;
                        const { values } = form;
                        const { mobile } = values;
                        return(
                            <div>
                                {mobile.map((mobile, index)=>(
                                    <div key={index}>
                                        <Field component={TextField} fullWidth color='secondary' name={`mobile[${index}]`} />
                                        {index > 0 && (
                                            <Button variant='contained' color='secondary' onClick={() => remove(index)}>-</Button>
                                        )}
                                        <Button variant='contained' color='primary' onClick={()=> push('')} >+</Button>
                                    </div> 
                                ))}
                            </div>
                        )
                    }}
                    </FieldArray>
                        </Grid>
                        </Grid>
                        </CardContent>
                    </Card>
                </div>
                <div className='form-control'>
                <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                            <Typography variant='h6' align='left' htmlFor='address'>Address</Typography>
                            </Grid>
                        <Grid item xs={6}>
                            <Field component={TextField} fullWidth color='secondary' type='text' id='address' name='address' />
                            <ErrorMessage name='address' component={ErrorMsg} />
                        </Grid>
                        </Grid>
                        </CardContent>
                    </Card>
                        </div>
                </Form>
            </div>
            <Divider />
            <div>
            <Card>
                  <CardContent>
              <Grid container direction='row' justify="space-around" alignItems="center">
                <Grid item xs={6} lg={3}>
                    <Button variant='contained' color='primary' fullWidth onClick={this.continue}>Continue</Button>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Button variant='contained' color='secondary' fullWidth onClick={this.back}>Back</Button>
                </Grid>
              </Grid>
                  </CardContent>
                </Card>
            </div>
            </div>
        )
    }
}
