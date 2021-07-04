import React, { Component } from 'react';
import {Form} from "formik";
import {
  ThemeProvider,Typography, Button, Grid, Paper,
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Card, CardContent, Divider } from '@material-ui/core';

import theme from '../theme.js';

export default class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
      };
      back = (e) => {
        e.preventDefault();
        this.props.prevStep();
      };
      
    render() {
        const {
            name,
            fatherName,
            DoB,
            age,
            eMail,
            web,
            sMedia,
            mobile,
            address,
            education,
            experience,
            oQual,
            skills,
            hobbies,
            tagLine,
          } = this.props.values;
        let msg,color;
        if(name === ""){
            msg = "Please Fill All the Details Carefully"
            color='secondary'
        }else{
            msg = "Please review your credentials"
            color='primary'
        }

        return (
            <ThemeProvider theme={theme}>
                <Grid  container direction="row" justify="center" alignItems="center">
                <Grid item xs={10}>
                <Form>
                <div>
                      <Card>
                <Typography variant='h6' align='center' color={color}>{msg} {name}</Typography>
                        <CardContent>
                    <Grid  container justify="center" alignItems="center">
                        <Grid item xs={6}><Typography display='inline'>Name: </Typography></Grid>
                        <Grid item xs={6}><Typography variant='h5'  display='inline' >{name}</Typography></Grid>
                    
                        <Grid item xs={6}><Typography display='inline'>Father Name: </Typography></Grid>
                        <Grid item xs={6}><Typography  display='inline' >{fatherName}</Typography></Grid>
                    
                        <Grid item xs={6}><Typography display='inline'>Date of Birth / Age: </Typography></Grid>
                        <Grid item xs={6}><Typography  display='inline' >{DoB} / {age} Years</Typography></Grid>
                    
                        <Grid item xs={6}><Typography display='inline'>Contact No. </Typography></Grid>
                        <Grid item xs={6} >
                        {mobile.map((element, id)=>(
                                <Typography>{element}</Typography>
                        ))}
                        </Grid>

                        <Grid item xs={6}><Typography display='inline'>Social Media </Typography></Grid>
                        <Grid item xs={6} >
                        {sMedia.map((element, id)=>(
                                <Typography>{element}</Typography>
                        ))}
                        </Grid>
                        
                        <Grid item xs={6}><Typography display='inline'>E Mail: </Typography></Grid>
                        <Grid item xs={6}><Typography  display='inline' >{eMail}</Typography></Grid>

                        {
                            web !== "" && 
                            <>
                            <Grid item xs={6}><Typography display='inline'>Web: </Typography></Grid>
                            <Grid item xs={6}><Typography  display='inline' >{web}</Typography></Grid>
                            </>
                        }

                        <Grid item xs={6}><Typography display='inline'>Address </Typography></Grid>
                        <Grid item xs={6}><Typography  display='inline' >{address}</Typography></Grid>
                    </Grid>
                        </CardContent>
                      </Card>

                    <Typography variant='h6'>Education</Typography>
                    <Grid container>
                        <Grid item xs={12} >
                        <TableContainer component={Paper}>
                        <Table size='small' aria-label="Education">
                          <TableHead component='thead'>
                            <TableRow>
                              <TableCell  align="center" variant='head'>Major Subjects</TableCell>
                              <TableCell align="center" variant='head'>Total Marks</TableCell>
                              <TableCell align="center" variant='head'>Obtained Marks</TableCell>
                              <TableCell align="center" variant='head'>Institute</TableCell>
                              <TableCell align="center" variant='head'>Passing Year</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                        {education.map((elements, id)=>(
                              <TableRow key={elements.year}>
                              <TableCell align="center" component="th" scope="row">{elements.major}</TableCell>
                                <TableCell align="center">{elements.totalMarks}</TableCell>
                                <TableCell align="center">{elements.oMarks}</TableCell>
                                <TableCell align="center">{elements.inst}</TableCell>
                                <TableCell align="center">{elements.year}</TableCell>
                              </TableRow>
                    ))}
                    </TableBody>
                  </Table>
                  </TableContainer>
                        </Grid>
                    </Grid>

                    {
                        experience[0].title !== "" &&

                        <>
                    <Typography variant='h6'>Profesional Experience</Typography>
                    <Grid container>
                        <Grid item xs={12} >
                        <TableContainer component={Paper}>
                        <Table size='small' aria-label="Education">
                          <TableHead component='thead'>
                            <TableRow>
                              <TableCell  align="center" variant='head'>Job Title</TableCell>
                              <TableCell align="center" variant='head'>Company/Business</TableCell>
                              <TableCell align="center" variant='head'>Start Date</TableCell>
                              <TableCell align="center" variant='head'>End Date</TableCell>
                              <TableCell align="center" variant='head'>Duration</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                        {experience.map((elements, id)=>(
                              <TableRow key={elements.year}>
                              <TableCell align="center" component="th" scope="row">{elements.title}</TableCell>
                                <TableCell align="center">{elements.company}</TableCell>
                                <TableCell align="center">{elements.start}</TableCell>
                                <TableCell align="center">{elements.end}</TableCell>
                                <TableCell align="center">{elements.duration}</TableCell>
                              </TableRow>
                    ))}
                    </TableBody>
                  </Table>
                  </TableContainer>
                        </Grid>
                    </Grid>
                    </>
                    }

                    {
                        oQual[0].course !== "" &&

                        <>
                    <Typography variant='h6'>Professional Diplomas</Typography>
                    <Grid container>
                        <Grid item xs={12} >
                        <TableContainer component={Paper}>
                        <Table size='small' aria-label="Education">
                          <TableHead component='thead'>
                            <TableRow>
                              <TableCell  align="center" variant='head'>Course Name</TableCell>
                              <TableCell align="center" variant='head'>Skills</TableCell>
                              <TableCell align="center" variant='head'>Start Date</TableCell>
                              <TableCell align="center" variant='head'>End Date</TableCell>
                              <TableCell align="center" variant='head'>Duration</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                        {oQual.map((elements, id)=>(
                              <TableRow key={elements.year}>
                              <TableCell align="center" component="th" scope="row">{elements.course}</TableCell>
                                <TableCell align="center">{elements.skill}</TableCell>
                                <TableCell align="center">{elements.start}</TableCell>
                                <TableCell align="center">{elements.end}</TableCell>
                                <TableCell align="center">{elements.duration}</TableCell>
                              </TableRow>
                    ))}
                    </TableBody>
                  </Table>
                  </TableContainer>
                        </Grid>
                    </Grid>
                        </>
                    }
                <Card>
                  <CardContent>
                        {
                            skills[0].title !== "" && 
                            <>
                            <Grid item xs={6}><Typography display='inline'>Skills: </Typography></Grid>
                            <Grid item xs={12}>{skills.map((element, id)=>(
                                <Typography display='inline'>{element.title} , </Typography>
                        ))}
                        </Grid>
                            </>
                        }

                        {
                            hobbies[0].title !== "" && 
                            <>
                            <Grid item xs={6}><Typography display='inline'>Hobbies: </Typography></Grid>
                            <Grid item xs={12}>{hobbies.map((element, id)=>(
                                <Typography display='inline'>{element.title} , </Typography>
                        ))}
                        </Grid>
                            </>
                        }

                        <Grid item xs={10}><Typography display='inline' >Objective:</Typography></Grid>
                        <Grid item xs={12}><Typography display='inline' >{tagLine}</Typography></Grid>
                  </CardContent>
                </Card>
                            
                </div>
            </Form>
            <Divider />
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
                </Grid>
                </Grid>
            </ThemeProvider>
        )
    }
}