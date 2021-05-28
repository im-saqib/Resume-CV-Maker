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
                <div>
                    <Typography variant='h4' align='left' >Personal Details</Typography>
                   
                    <Form>
                        <div className='form-control'>
                            <label htmlFor='name'>Name</label>
                            <Field type='text' id='name' name='name' />
                            <ErrorMessage name='name' component={ErrorMsg} />
                        </div>
                <div className='form-control'>
                    <label htmlFor='fatherName'>Father Name</label>
                    <Field type='fatherName' id='fatherName' name='fatherName' />
                    <ErrorMessage name='fatherName'>
                    {(errorMsg) => <div className='error'>{errorMsg}</div>}
                    </ErrorMessage>
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
