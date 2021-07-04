import React, { Component } from 'react'

import {
    ThemeProvider, makeStyles, Typography, Button, Grid, Paper,
    Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Card, CardContent, Divider } from '@material-ui/core';

    // ICONS

    import PrintIcon from '@material-ui/icons/Print';
    import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import {layoutOne} from '../theme.js';

const useStyles = makeStyles({
    page:{
        marginTop: 20
    },
    head:{
        background: "#2942d6",
        color: '#fff',
        fontSize: 16,
        fontWeight: 700,
    },
    heading:{
      textDecoration: "underline",
      color: "#2942d6",
      fontStyle: 'italic'
    }
})

function LayoutOnePrint(props) {
    const classes = useStyles();
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
      } = props.values;
    return (
        <div id='section-to-print' className= {classes.page} >
        <ThemeProvider theme={layoutOne}>
            <Grid  container direction="row" justify="center" alignItems="center">
                <Grid item xs={12}>
                <Card>
                 <CardContent>
                        <Typography variant='h3' align='center' className={classes.heading} gutterBottom>
                          Curriculum Vitae
                        </Typography>
                    <Grid  container justify="center" alignItems="center">
                        <Grid item xs={6}><Typography display='inline'>Name: </Typography></Grid>
                        <Grid item xs={6}><Typography variant='h5'  display='inline' style={{color: "#2942d6"}}>
                          {name}
                        </Typography></Grid>
                    
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
                            <Divider />
                            
                    <Typography variant='h5'>Certificates/ Degrees</Typography>
                    <Grid container>
                        <Grid item xs={12} >
                        <TableContainer component={Paper}>
                        <Table size='small'>
                          <TableHead>
                            <TableRow >
                              <TableCell align="center" className={classes.head}>Major Subjects</TableCell>
                              <TableCell align="center" className={classes.head}>Total Marks/CGPA</TableCell>
                              <TableCell align="center" className={classes.head}>Obtained Marks/CGPA</TableCell>
                              <TableCell align="center" className={classes.head}>Institute</TableCell>
                              <TableCell align="center" className={classes.head}>Passing Year</TableCell>
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

                    <Divider />
                    {
                        oQual[0].course !== "" &&

                        <>
                    <Typography variant='h5'>Professional Diplomas</Typography>
                    <Grid container>
                        <Grid item xs={12} >
                        <TableContainer component={Paper}>
                        <Table size='small'>
                          <TableHead component='thead'>
                            <TableRow>
                              <TableCell  align="center" className={classes.head}>Course Name</TableCell>
                              <TableCell align="center" className={classes.head}>Skills</TableCell>
                              <TableCell align="center" className={classes.head}>Start Date</TableCell>
                              <TableCell align="center" className={classes.head}>End Date</TableCell>
                              <TableCell align="center" className={classes.head}>Duration</TableCell>
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

                    <Divider />
                    
                    {
                        experience[0].title !== "" &&

                        <>
                    <Typography variant='h5'>Profesional Experience</Typography>
                    <Grid container>
                        <Grid item xs={12} >
                        <TableContainer component={Paper}>
                        <Table size='small'>
                          <TableHead component='thead'>
                            <TableRow>
                              <TableCell  align="center" className={classes.head}>Job Title</TableCell>
                              <TableCell align="center" className={classes.head}>Company/Department</TableCell>
                              <TableCell align="center" className={classes.head}>Start Date</TableCell>
                              <TableCell align="center" className={classes.head}>End Date</TableCell>
                              <TableCell align="center" className={classes.head}>Duration</TableCell>
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
                    <Divider />
                    {
                        skills[0].title !== "" && 
                            <>
                            <Grid item xs={3}><Typography variant='h6'>Skills:-</Typography><Divider /></Grid>
                            
                            <Grid item xs={12}>{skills.map((element, id)=>(
                                <Typography variant='body1' display='inline'>{element.title}, </Typography>
                        ))}
                        </Grid>
                            </>
                        }
                        <Divider />
                        {
                            hobbies[0].title !== "" && 
                            <>
                            <Grid item xs={3}><Typography variant='h6'>Hobbies: </Typography><Divider /></Grid>
                            <Grid item xs={12}>{hobbies.map((element, id)=>(
                                <Typography variant='body1' display='inline'>{element.title}, </Typography>
                        ))}
                        </Grid>
                            </>
                        }
                        <Divider />

                        <Grid item xs={10}><Typography variant='h6' display='inline' >Objective:</Typography></Grid>
                        <Grid item xs={10}><Typography variant='h6' display='inline' >{tagLine}</Typography></Grid>
                        </CardContent>
                      </Card>

                </Grid>
            </Grid>
        </ThemeProvider>
        </div>
    )
}

export default class LayoutOne extends Component {
  print = (e) => {
    e.preventDefault();
    window.print();
  }
  selection =  (e) => {
    e.preventDefault();
    this.props.selection();
  }
  render() {
    return (
      <div>
        <Card content={() => this.componentRef}>
         <CardContent>
          <Grid  container direction="row" justify="space-around" alignItems="center">
                <Grid item xs={6} lg={3}>
                    <Button onClick={this.selection}>
                      <NavigateBeforeIcon style={{fontSize: 18,color: "#413FC0" }}/>
                       Selection
                    </Button>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <Button onClick={this.print}>
                    <PrintIcon style={{fontSize: 18,color: "#413FC0" }} />
                     Print this out!  
                    </Button>
                </Grid>
           </Grid>
          </CardContent>
        </Card>
                <LayoutOnePrint values={this.props.values} ref={el => (this.componentRef = el)} />
      </div>
    )
  }
}