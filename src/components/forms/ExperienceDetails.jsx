import React, { Component } from 'react';
import {Typography,Button, Grid, Card, CardContent} from '@material-ui/core';

import {Form, Field, FieldArray } from "formik";// ErrorMessage,

import { TextField } from 'formik-material-ui';

export default class ExperienceDetails extends Component {
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
            <div>
                {/* <Typography variant='h4' align='left' >Experience Details</Typography> */}
                 <div>
                <Form>
        <div className='form-control'>
        <Grid  container direction='row' justify="center" alignItems="center">
        <Grid item xs={12}>
          <FieldArray name='experience'>
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { experience } = values;
              return (
                <div>
                  {experience.map((experience, index) => (
                    <div key={index}>
                      <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                      <Typography variant='h6' color='primary'>Job Title</Typography>
                      </Grid>
                      <Grid item xs={6}>
                      <Field component={TextField} fullWidth color='secondary' name={`experience[${index}].title`} />
                      </Grid>
                    </Grid>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                      <Typography variant='h6' color='primary'>Work Place Name</Typography>
                        </Grid>
                      <Grid item xs={6}>
                      <Field component={TextField} fullWidth color='secondary' name={`experience[${index}].company`} />
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
                      <Field component={TextField} fullWidth color='secondary' name={`experience[${index}].start`} />
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
                      <Field component={TextField} fullWidth color='secondary' name={`experience[${index}].end`} />
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
              
                </Form>
                </div>
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
