import React, { Component } from 'react';
import {Typography,Button} from '@material-ui/core';

import {Form, Field, ErrorMessage, FieldArray } from "formik";

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
                <Typography variant='h4' align='left' >Other Details</Typography>
            <div>
        <div>
        <Form>
        <div className='form-control'>
          <FieldArray name='oQual'>
            {(fieldArrayProps) => {
              const { push, remove, form } = fieldArrayProps;
              const { values } = form;
              const { oQual } = values;
              return (
                <div>
                    <Typography variant='h4' color='initial'>Other Qualification or Courses</Typography>
                  {oQual.map((oQual, index) => (
                    <div key={index}>
                      <Typography variant='h6' display='inline' color='primary'>Course Name</Typography>
                      <Field name={`oQual[${index}].course`} />
                      <Typography variant='h6' display='inline' color='primary'>Major</Typography>
                      <Field name={`oQual[${index}].skill`} />
                      <Typography variant='h6' display='inline' color='primary'>Start Date</Typography>
                      <Field name={`oQual[${index}].start`} />
                      <Typography variant='h6' display='inline' color='primary'>End Date</Typography>
                      <Field name={`oQual[${index}].end`} />
                      <Typography variant='h6' display='inline' color='primary'>Duration</Typography>
                      <Field name={`oQual[${index}].duration`} />
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
        <div className='form-control'>
                <label htmlFor='skills'>Skills</label>
                <FieldArray name='skills'>
                    {(fieldArryaProps)=> {
                        const {push, remove, form} = fieldArryaProps;
                        const { values } = form;
                        const { skills } = values;
                        return(
                            <div>
                                {skills.map((skills, index)=>(
                                    <div key={index}>
                                        <Field name={`skills[${index}].title`} />
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
                </div>
                <div className='form-control'>
                <label htmlFor='hobbies'>Hobbies</label>
                <FieldArray name='hobbies'>
                    {(fieldArryaProps)=> {
                        const {push, remove, form} = fieldArryaProps;
                        const { values } = form;
                        const { hobbies } = values;
                        return(
                            <div>
                                {hobbies.map((hobbies, index)=>(
                                    <div key={index}>
                                        <Field name={`hobbies[${index}].title`} />
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
                </div>
                <div className='form-control'>
                  <Typography variant='caption' color='primary'>Tag Line</Typography>
                  <Field type='tagLine' id='tagLine' name='tagLine' />
                  <ErrorMessage name='eMail' component={ErrorMsg} />
                </div>
                <Button type='submit' variant='contained' onClick={this.onSubmit}>Submit</Button>
                <Button variant='contained' onClick={this.back}>Back</Button>

                </Form>
                </div>

                </div>
                <div>
                </div>
            </div>
        )
    }
}
