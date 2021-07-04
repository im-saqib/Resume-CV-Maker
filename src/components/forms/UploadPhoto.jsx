import React, { Component } from 'react';
import { Typography, Button, Card, CardHeader, CardContent, Grid,  Divider, Avatar, } from '@material-ui/core';

import FileBase64 from 'react-file-base64';

import { Form } from "formik";

export default class UploadPhoto extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };
    upload = (file) => {
        const {values} = this.props;
        values.image = file;
        this.forceUpdate();
    }
    render() {
          const {values} = this.props;
        return (
            <div>
                <Form>

                        <Card style={{textAlign:'center'}}>
                        <CardHeader title='Preview Image' />
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item xs={6}>
                        <Avatar
                        alt='Resume' 
                        src={values.image}
                        style={{width : '200px', height : '200px', display: 'flex', alignItems: 'center'}}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CardContent>
                            <Divider />
                            <FileBase64
                            type='file'
                            multiple={false}
                            onDone={ ({ base64 }) => 
                            this.upload(base64)
                        }
                            />
                            <Typography variant='subtitle1'>Upload your recent passport size picture.</Typography>
                            <Typography variant='subtitle2' style={{color: 'red'}}>
                                <Button size='small' onClick={this.continue}>Skip</Button> if you want Classic resume</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                    </Card>
                </Form>
                        <Divider />
                <Card>
                  <CardContent>
              <Grid container direction='row' justify="space-around" alignItems="center">
                <Grid item xs={4} lg={2}>
                    <Button variant='contained' color='primary' fullWidth onClick={this.continue}>Continue</Button>
                </Grid>
                <Grid item xs={4} lg={2}>
                    <Button variant='contained' color='secondary' fullWidth onClick={this.back}>Back</Button>
                </Grid>
              </Grid>
                  </CardContent>
                </Card>
            </div>
        )
    }
}
