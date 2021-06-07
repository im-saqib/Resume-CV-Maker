import React, { Component } from 'react';
import {Typography,Button, Grid, Card, CardContent} from '@material-ui/core';

import { Form, Field, FieldArray } from "formik"; // ErrorMessage,
// import * as Yup from "yup";

import { TextField } from 'formik-material-ui';

export default class EducationalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
      };
      back = (e) => {
        e.preventDefault();
        this.props.prevStep();
      };
    render() {
        // const ErrorMsg = (props) => {
        //     return <div className='error'>{props.children}</div>;
        // };
        return (
            <div>
                <div>
                <Form>
        <div className='form-control'>
      <Grid  container direction='row' justify="center" alignItems="center">
        
        <Grid item xs={12}>
          <FieldArray name='education'>
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { education } = values;
              // console.log(education);
              return (
                <div>
                  {education.map((education, index) => (
                    <div key={index}>
                      <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                          <Typography variant='body1' display='inline'>Major Subjects</Typography>
                        </Grid>
                        <Grid item xs={6}>
                      <Field component={TextField} fullWidth color='secondary' name={`education[${index}].major`} />
                        </Grid>
                    </Grid>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                      <Typography variant='body1' display='inline'>Total Marks</Typography>
                        </Grid>
                        <Grid item xs={6}>
                      <Field component={TextField} fullWidth color='secondary' name={`education[${index}].totalMarks`} />
                        </Grid>
                        </Grid>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                      <Typography variant='body1' display='inline'>Obtained Marks</Typography>
                        </Grid>
                        <Grid item xs={6}>
                      <Field component={TextField} fullWidth color='secondary' name={`education[${index}].oMarks`} />
                        </Grid>
                    </Grid>
                    </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                      <Typography variant='body1' display='inline'>Board or Institute</Typography>
                        </Grid>
                        <Grid item xs={6}>
                      <Field component={TextField} fullWidth color='secondary' name={`education[${index}].inst`} />
                        </Grid>
                      </Grid>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item xs={6}>
                      <Typography variant='body1' display='inline'>Passing Year</Typography>
                        </Grid>
                        <Grid item xs={6}>
                      <Field component={TextField} fullWidth color='secondary' name={`education[${index}].year`} />
                        </Grid>
                    </Grid>
                        
                      {index > 0 && (
                        <Button variant='contained' color='secondary' type='button' onClick={() => remove(index)}>
                          -
                        </Button>
                      )}
                      <Button variant='contained' color='primary' type='button' onClick={() => push("")}>
                        +
                      </Button>
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