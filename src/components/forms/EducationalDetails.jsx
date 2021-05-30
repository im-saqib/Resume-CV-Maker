import React, { Component } from 'react';
import {Typography,Button} from '@material-ui/core';

import { Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

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
        const ErrorMsg = (props) => {
            return <div className='error'>{props.children}</div>;
        };
        return (
            <div>
                <Typography variant='h4' align='left' >Educational Details</Typography>
                <div>
                <Form>
                <div className='form-control'>
          <FieldArray name='education'>
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { education } = values;
              return (
                <div>
                  {education.map((education, index) => (
                    <div key={index}>
                      <Typography variant='h6' display='inline'>Major Subjects</Typography>
                      <Field name={`education[${index}].major`} />
                      <Typography variant='h6' display='inline'>Total Marks</Typography>
                      <Field name={`education[${index}].totalMarks`} />
                      <Typography variant='h6' display='inline'>Obtained Marks</Typography>
                      <Field name={`education[${index}].oMarks`} />
                      <Typography variant='h6' display='inline'>Board or Institute</Typography>
                      <Field name={`education[${index}].inst`} />
                      {index > 0 && (
                        <Button type='button' onClick={() => remove(index)}>
                          -
                        </Button>
                      )}
                      <Button type='button' onClick={() => push("")}>
                        +
                      </Button>
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