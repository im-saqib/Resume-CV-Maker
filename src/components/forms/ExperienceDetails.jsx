import React, { Component } from 'react';
import {Typography,Button} from '@material-ui/core';

import {Form, Field, FieldArray } from "formik";// ErrorMessage,

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
                <Typography variant='h4' align='left' >Experience Details</Typography>
                 <div>
                <Form>
                <div className='form-control'>
          <FieldArray name='experience'>
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { experience } = values;
              return (
                <div>
                  {experience.map((experience, index) => (
                    <div key={index}>
                      <Typography variant='h6' display='inline' color='primary'>Job Title</Typography>
                      <Field name={`experience[${index}].title`} />
                      <Typography variant='h6' display='inline' color='primary'>Work Place Name</Typography>
                      <Field name={`experience[${index}].company`} />
                      <Typography variant='h6' display='inline' color='primary'>Start Date</Typography>
                      <Field name={`experience[${index}].start`} />
                      <Typography variant='h6' display='inline' color='primary'>End Date</Typography>
                      <Field name={`experience[${index}].end`} />
                      {index > 0 && (
                        <button type='button' onClick={() => remove(index)}>
                          -
                        </button>
                      )}
                      <button type='button' onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>
              
                </Form>
                </div>
                <div>
                <Button variant='contained' onClick={this.continue}>Continue</Button>
                <Button variant='contained' onClick={this.back}>Back</Button>
                </div>
            </div>
        )
    }
}
