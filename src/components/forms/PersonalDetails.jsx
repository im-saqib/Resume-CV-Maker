import React, { Component } from 'react';
import {Typography,Button} from '@material-ui/core';

import {Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

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
                    <Typography variant='h4' align='left' >Personal Details</Typography>
                <div>
                    <Form>
                        <div className='form-control'>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' id='name' name='name' />
                            <ErrorMessage name='name' component={ErrorMsg} />
                        </div>
                <div className='form-control'>
                    <label htmlFor='fatherName'>Father Name</label>
                    <Field type='fatherName' id='fatherName' name='fatherName' />
                    <ErrorMessage name='fatherName' component={ErrorMsg} />
                </div>
                <div className='form-control'>
                    <label htmlFor='DoB'>Date of Birth</label>
                    <Field type='DoB' id='DoB' name='DoB' />
                    <ErrorMessage name='DoB' component={ErrorMsg} />
                </div>
                <div className='form-control'>
                    <label htmlFor='age'>Age</label>
                    <Field type='age' id='age' name='age' />
                    <ErrorMessage name='age' component={ErrorMsg} />
                </div>
                <div className='form-control'>
                    <label htmlFor='eMail'>E-Mail</label>
                    <Field type='eMail' id='eMail' name='eMail' />
                    <ErrorMessage name='eMail' component={ErrorMsg} />
                </div>
                <div className='form-control'>
                    <label htmlFor='web'>Web Site</label>
                    <Field type='web' id='web' name='web' />
                    <ErrorMessage name='web' component={ErrorMsg} />
                </div>
                <div className='form-control'>
                <label htmlFor='mobile'>Scoial Media</label>
                <FieldArray name='sMedia'>
                    {(fieldArryaProps)=> {
                        const {push, remove, form} = fieldArryaProps;
                        const { values } = form;
                        const { sMedia } = values;
                        return(
                            <div>
                                {sMedia.map((sMedia, index)=>(
                                    <div key={index}>
                                        <Field name={`sMedia[${index}]`} />
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
                    <label htmlFor='mobile'>Phone Number</label>
                    <FieldArray name='mobile'>
                    {(fieldArrayProps)=>{
                        const {push, remove, form} = fieldArrayProps;
                        const { values } = form;
                        const { mobile } = values;
                        return(
                            <div>
                                {mobile.map((mobile, index)=>(
                                    <div key={index}>
                                        <Field name={`mobile[${index}]`} />
                                        {index > 0 && (
                                            <Button color='secondary' onClick={() => remove(index)}>-</Button>
                                        )}
                                        <Button color='primary' onClick={()=> push('')} >+</Button>
                                    </div> 
                                ))}
                            </div>
                        )
                    }}
                    </FieldArray>
                </div>
                <div className='form-control'>
                            <label htmlFor='address'>Address</label>
                            <Field type='text' id='address' name='address' />
                            <ErrorMessage name='address' component={ErrorMsg} />
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
