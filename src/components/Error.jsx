import React, { Component } from 'react';
import {Typography,Button} from '@material-ui/core';

export default class Error extends Component {
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
                <Typography variant='h1' align='center' color='danger' >Error 404</Typography>
                <Button variant='contained' href='/'>Home</Button>
            </div>
        )
    }
}
