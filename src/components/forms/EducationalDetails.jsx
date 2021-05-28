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
                      <label>Major Subjects</label>
                      <Field name={`education[${index}].major`} />
                      <label>Total Marks</label>
                      <Field name={`education[${index}].totalMarks`} />
                      <label>Obtained Marks</label>
                      <Field name={`education[${index}].oMarks`} />
                      <label>Board or Institute</label>
                      <Field name={`education[${index}].inst`} />
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