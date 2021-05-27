import React, { Component } from 'react';
import {Typography,Button} from '@material-ui/core';

export default class UploadPhoto extends Component {
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
                <Typography variant='h4' align='left' >Upload & Edit Photo</Typography>
            <Button variant='contained' onClick={this.continue}>Continue</Button>
                <Button variant='contained' onClick={this.back}>Back</Button>
            </div>
        )
    }
}
