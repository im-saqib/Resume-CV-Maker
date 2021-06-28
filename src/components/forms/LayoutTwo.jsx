import React, { Component } from 'react';

import {
    ThemeProvider, makeStyles, Typography, Button, Grid, Paper,
    Table, TableBody, TableCell, TableContainer,
    TableRow, Card, CardContent, Divider, Avatar, } from '@material-ui/core';

    // ICONS

    import MailOutlineIcon from '@material-ui/icons/MailOutline';
    import LanguageIcon from '@material-ui/icons/Language';
    import TwitterIcon from '@material-ui/icons/Twitter';
    import FacebookIcon from '@material-ui/icons/Facebook';
    import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
    import PersonPinIcon from '@material-ui/icons/PersonPin';
    import PrintIcon from '@material-ui/icons/Print';
    import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import {layoutTwo} from '../theme.js';

import avatar from '../images/saqib.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      [theme.breakpoints.up(800)]: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      '@media print':{
        '& > *': {
          margin: theme.spacing(1),
        },
      }
    },
    large: {
        width: theme.spacing(40),
        height: theme.spacing(40),

        [theme.breakpoints.down('md')]: {
            width: theme.spacing(34),
            height: theme.spacing(34),
          },
          
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(25),
            height: theme.spacing(25),
          },
        [theme.breakpoints.down(800)]: {
            width: theme.spacing(22),
            height: theme.spacing(22),
          },
        [theme.breakpoints.down(710)]: {
            width: theme.spacing(18),
            height: theme.spacing(18),
          },
          [theme.breakpoints.down(600)]: {
            width: theme.spacing(15),
            height: theme.spacing(15),
          },
          [theme.breakpoints.down(500)]: {
            width: theme.spacing(12),
            height: theme.spacing(12),
          },
        [theme.breakpoints.down(410)]: {
            width: theme.spacing(9),
            height: theme.spacing(9),
          },
      },
    head:{
      color: "#413FC0",
      fontWeight: 700,
      fontSize: 14,
      '@media (max-width:600px)': {
        fontSize: 12,
      },
      '@media (max-width:440px)': {
        fontSize: 8,
        color: 'blue'
      },
      margin: 5
    },
    size: {
      color: "#3F7EC0",
      fontSize: 14,
      '@media (max-width:600px)': {
        fontSize: 10,
        // color: 'green'
      },
      '@media (max-width:440px)': {
        fontSize: 8,
        // color: 'blue'
      },
    },
    icon:{
      fontSize: 18,
      color: "#413FC0" 
    }
  }));
function LayoutTwoPrint(props) {
    const classes = useStyles();
    const {
        name,
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
      const mail = eMail.split('@');
    return (
        <ThemeProvider theme={layoutTwo}>
         <div id='section-to-print'>
           
            <Grid  container direction="column" justify="center" alignItems="center">
                <Grid  container direction="row" justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Paper className={classes.root}>
                        <Grid item xs={3}>
                            <Card>
                              <CardContent>
                                <Avatar className={classes.large} alt="avatar" src={avatar} />
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent>
                                <Divider />
                                <Typography className={classes.size}>Date of Birth : {DoB}</Typography>
                                <Typography className={classes.size}>Age : {age}</Typography>
                                <Divider />

                                <PersonPinIcon  className={classes.icon} />
                                <Typography className={classes.size}>{address}</Typography>

                                <PhoneCallbackIcon className={classes.icon} />
                                {mobile.map((element, id)=>(
                                  <Typography className={classes.size}>{element}</Typography>
                                ))}

                                <MailOutlineIcon className={classes.icon} />
                                <Typography className={classes.size}>{mail[0]}</Typography>
                                <Typography className={classes.size}>@{mail[1]}</Typography>
                                {
                                  web !== "" && 
                                  <>
                                  <LanguageIcon className={classes.icon} />
                                  <Typography className={classes.size}>{web}</Typography>
                                  </>
                                }
                                {
                                  sMedia[0] !== "" && 
                                  <>
                                  <TwitterIcon className={classes.icon}/>
                                  <FacebookIcon className={classes.icon}/>...
                                  {sMedia.map((element, id)=>(
                                  <Typography className={classes.size}>{element}</Typography>
                                  ))}
                                </>
                                }
                                <Divider />
                    {
                        skills[0].title !== "" && 
                            <>
                            <Grid item xs={3} style={{marginTop:10}}><Typography  className={classes.head}>Skills</Typography><Divider /></Grid>
                            
                            <Grid item xs={12}>{skills.map((element, id)=>(
                                <Typography className={classes.size}>{element.title}</Typography>
                        ))}
                        </Grid>
                            </>
                        }
                        <Divider />
                        {
                            hobbies[0].title !== "" && 
                            <>
                            <Grid item xs={3} style={{marginTop:10}}><Typography  className={classes.head}>Hobbies</Typography><Divider /></Grid>
                            <Grid item xs={12}>{hobbies.map((element, id)=>(
                                <Typography className={classes.size}>{element.title}</Typography>
                        ))}
                        </Grid>
                            </>
                        }
                        <Divider />

                              </CardContent>
                            </Card>
                        </Grid>

                        <Divider orientation="vertical" flexItem />

                        <Grid item xs={9}>
                                <Card style={{
                                  backgroundColor: "#3F7EC0",
                                  color: "#fff",
                                }}>
                                    <CardContent>
                                    <Typography variant='h6'>{name}</Typography>
                                    <Typography variant='body2'>{tagLine}</Typography>
                                    </CardContent>
                                </Card>
                            
                  {
                    experience[0].title !== "" &&
                                      
                      <>
                                <Card>
                                  <CardContent>
                                    <Typography align='center' className={classes.head}>Profesional Experience</Typography>
                                    <Typography className={classes.size}>
                                      I have worked in following places with utter devotion and conscientious.
                                      I have increased productivty with my out of the box and time saving ideas.
                                      Recommendation letter from these work places are proof of my earnest hardwork.  
                                    </Typography>
                                  </CardContent>
                                </Card>
                        <TableContainer component={Paper}>
                        <Table size='small'>
                            <TableRow>
                              <TableCell  align="center" className={classes.head}>Job Title</TableCell>
                              <TableCell align="center" className={classes.head}>Company/Business</TableCell>
                              <TableCell align="center" className={classes.head}>Start Date</TableCell>
                              <TableCell align="center" className={classes.head}>End Date</TableCell>
                              <TableCell align="center" className={classes.head}>Duration</TableCell>
                            </TableRow>
                          <TableBody>
                        {experience.map((elements, id)=>(
                          <TableRow key={elements.year}>
                              <TableCell align="center" component="th" scope="row" className={classes.size}>{elements.title}</TableCell>
                                <TableCell align="center" className={classes.size}>{elements.company}</TableCell>
                                <TableCell align="center" className={classes.size}>{elements.start}</TableCell>
                                <TableCell align="center" className={classes.size}>{elements.end}</TableCell>
                                <TableCell align="center" className={classes.size}>{elements.duration}</TableCell>
                              </TableRow>
                    ))}
                    </TableBody>
                  </Table>
                  </TableContainer>
                    </>
                    }

                                <Card>
                                  <CardContent>
                                <Typography align='center' className={classes.head}>Education</Typography>
                                  </CardContent>
                                </Card>

                      <TableContainer component={Paper}>
                        <Table size='small'>
                            <TableRow >
                              <TableCell align="center" className={classes.head}>Major Subjects</TableCell>
                              <TableCell align="center" className={classes.head}>Total Marks/ CGPA</TableCell>
                              <TableCell align="center" className={classes.head}>Obtained Marks/ CGPA</TableCell>
                              <TableCell align="center" className={classes.head}>Institute</TableCell>
                              <TableCell align="center" className={classes.head}>Passing Year</TableCell>
                            </TableRow>
                          <TableBody>
                        {education.map((elements, id)=>(
                          <TableRow key={elements.year}>
                              <TableCell align="center" scope="row" className={classes.size}>
                                  {elements.major}
                                </TableCell>
                                <TableCell align="center" className={classes.size}>{elements.totalMarks}</TableCell>
                                <TableCell align="center" className={classes.size}>{elements.oMarks}</TableCell>
                                <TableCell align="center" className={classes.size}>{elements.inst}</TableCell>
                                <TableCell align="center" className={classes.size}>{elements.year}</TableCell>
                              </TableRow>
                    ))}
                    </TableBody>
                  </Table>
                  </TableContainer>


                            {
                                  oQual[0].course !== "" &&

                                  <>
                                <Card>
                                  <CardContent>
                                <Typography align='center' className={classes.head}>Professional Diplomas</Typography>
                                  </CardContent>
                                </Card>
                                  <TableContainer component={Paper}>
                                  <Table size='small'>
                                      <TableRow>
                                        <TableCell  align="center" className={classes.head}>Course Name</TableCell>
                                        <TableCell align="center" className={classes.head}>Skills</TableCell>
                                        <TableCell align="center" className={classes.head}>Start Date</TableCell>
                                        <TableCell align="center" className={classes.head}>End Date</TableCell>
                                        <TableCell align="center" className={classes.head}>Duration</TableCell>
                                      </TableRow>
                                    <TableBody>
                                  {oQual.map((elements, id)=>(
                                        <TableRow key={elements.year}>
                                        <TableCell align="center" component="th" scope="row"  className={classes.size}>
                                            {elements.course}
                                          </TableCell>
                                          <TableCell align="center" className={classes.size}>{elements.skill}</TableCell>
                                          <TableCell align="center" className={classes.size}>{elements.start}</TableCell>
                                          <TableCell align="center" className={classes.size}>{elements.end}</TableCell>
                                          <TableCell align="center" className={classes.size}>{elements.duration}</TableCell>
                                        </TableRow>
                              ))}
                              </TableBody>
                            </Table>
                            </TableContainer>
                            </>
                            }
                        </Grid>
                    </Paper>
                    
                </Grid>
              </Grid>
            </Grid>

         </div>
        </ThemeProvider>
    )
  }

  
  
  export default class LayoutTwo extends Component {
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
                  <LayoutTwoPrint values={this.props.values} ref={el => (this.componentRef = el)} />
        </div>
      )
    }
  }