import React, { Component } from 'react';
import {Typography,Button, Grid, Card, CardContent} from '@material-ui/core';

import {Form, Field, ErrorMessage, FieldArray } from "formik";

import { TextField } from 'formik-material-ui';

export default class OtherDetails extends Component {
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
              <Card>
                <CardContent>
                <Typography variant='h6' align='center' >Short Courses</Typography>
                </CardContent>
              </Card>
            <div>
        <div>
        <Form>
        <div className='form-control'>
        <Grid  container direction='row' justify="center" alignItems="center">
        <Grid item xs={12}>
          <FieldArray name='oQual'>
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { oQual } = values;
              return (
                <div>
                  {oQual.map((oQual, index) => (
                    <div key={index}>
                      <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                      <Typography variant='h6' display='inline' color='primary'>Course Name</Typography>
                      </Grid>
                      <Grid item xs={6}>
                      <Field component={TextField} fullWidth color='secondary' name={`oQual[${index}].course`} />
                      </Grid>
                    </Grid>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                      <Typography variant='h6' display='inline' color='primary'>Major</Typography>
                      </Grid>
                      <Grid item xs={6}>
                      <Field component={TextField} fullWidth color='secondary' name={`oQual[${index}].skill`} />
                      </Grid>
                    </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                      <Typography variant='h6' display='inline' color='primary'>Start Date</Typography>
                      </Grid>
                      <Grid item xs={6}>
                      <Field component={TextField} fullWidth color='secondary' name={`oQual[${index}].start`} />
                      </Grid>
                    </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                      <Typography variant='h6' display='inline' color='primary'>End Date</Typography>
                      </Grid>
                      <Grid item xs={6}>
                      <Field component={TextField} fullWidth color='secondary' name={`oQual[${index}].end`} />
                      </Grid>
                    </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                      <Typography variant='h6' display='inline' color='primary'>Duration</Typography>
                      </Grid>
                      <Grid item xs={6}>
                      <Field component={TextField} fullWidth color='secondary' name={`oQual[${index}].duration`} />
                      {index > 0 && (
                        <Button variant='contained' color='secondary' type='button' onClick={() => remove(index)}>
                          -
                        </Button>
                      )}
                      <Button variant='contained' color='primary' type='button' onClick={() => push("")}>
                        +
                      </Button>
                     </Grid>
                    </Grid>
                        </CardContent>
                    </Card>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
          </Grid>
          </Grid>
        </div>


        <div className='form-control'>
        <Grid  container direction='row' justify="center" alignItems="center">
        <Grid item xs={12}>
                                      <Card>
                                        <CardContent>
                                      <Grid  container direction='row' justify="center" alignItems="center">
                                        <Grid item xs={6}>
                                          <Typography variant='h6' display='inline' color='primary' htmlFor='skills'>Skills</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                <FieldArray name='skills'>
                    {(fieldArryaProps)=> {
                      const {push, remove, form} = fieldArryaProps;
                      const { values } = form;
                      const { skills } = values;
                      return(
                        <div>
                                {skills.map((skills, index)=>(
                                  <div key={index}>
                                        <Field component={TextField} fullWidth color='secondary' name={`skills[${index}].title`} />
                                        {index > 0 && (
                                            <Button color='secondary' onClick={()=>remove(index)}>-</Button>
                                        )}
                                        <Button color='primary' onClick={()=>push('')}>+</Button>
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
                </Grid>
                </Grid>
                </div>

                <div className='form-control'>
        <Grid  container direction='row' justify="center" alignItems="center">
        <Grid item xs={12}>
                                      <Card>
                                        <CardContent>
                                      <Grid  container direction='row' justify="center" alignItems="center">
                                        <Grid item xs={6}>
                                          <Typography variant='h6' display='inline' color='primary' htmlFor='hobbies'>Hobbies</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                <FieldArray name='hobbies'>
                    {(fieldArryaProps)=> {
                        const {push, remove, form} = fieldArryaProps;
                        const { values } = form;
                        const { hobbies } = values;
                        return(
                            <div>
                                {hobbies.map((hobbies, index)=>(
                                    <div key={index}>
                                        <Field component={TextField} fullWidth color='secondary' name={`hobbies[${index}].title`} />
                                        {index > 0 && (
                                            <Button color='secondary' onClick={()=>remove(index)}>-</Button>
                                        )}
                                        <Button color='primary' onClick={()=>push('')}>+</Button>
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
    </Grid>
  </Grid>
                </div>
                <div className='form-control'>
            <Grid  container direction='row' justify="center" alignItems="center">
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Grid  container direction='row' justify="center" alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant='h6' color='primary'>Aimbition</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Field component={TextField} fullWidth color='secondary' type='tagLine' id='tagLine' name='tagLine' />
                        <ErrorMessage name='tagLine' component={ErrorMsg} />
                    </Grid>
                    </Grid>
                      </CardContent>
                    </Card>
                </Grid>
            </Grid>
                </div>
                <div>
                <Card>
                  <CardContent>
              <Grid container direction='row' justify="space-around" alignItems="center">
                <Grid item xs={6} lg={3}>
                    <Button variant='contained' color='primary' fullWidth type='submit' onClick={this.onSubmit}>Continue</Button>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Button variant='contained' color='secondary' fullWidth onClick={this.back}>Back</Button>
                </Grid>
              </Grid>
                  </CardContent>
                </Card>
                </div>
                </Form>
                </div>

                </div>
                <div>
                </div>
            </div>
        )
    }
}
