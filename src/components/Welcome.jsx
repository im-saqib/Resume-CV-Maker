import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import About from "../pages/About";
import PrivacyPolicy from "../pages/PrivacyPolicy";

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import FrontImg from './FrontImg.jsx';

import {
    ThemeProvider, Typography, Card, CardContent, Grid, Grow, makeStyles 
} from '@material-ui/core';

import theme from './theme';
const useStyles = makeStyles((theme)=>({
    frontPage: {
        height : 450,
        padding: theme.spacing(1),
    },
    space: {
        padding: theme.spacing(2),
    }
}));
// Handled below in Welcome component
function Home (props) {
    const classes = useStyles();
        return (
              <ThemeProvider theme={theme}>
                <Grid
                    container
                    justify="center"
                    alignItems="stretch"
                >
                    <Grid item xs={12}>
                       <Grid container>
                           <Grid item sm={12} md={6}>
                <Card className={classes.frontPage} >
                    <CardContent>
                        <Grow in={true}>
                           <Typography variant='h3' className={classes.space} color='primary'>
                                Create Your Resume in minutes...
                            </Typography>
                        </Grow>
                        <Grow in={true} timeout={2000}>
                            <Typography variant='h5' className={classes.space}>
                                Enter your credentials
                            </Typography>
                        </Grow>
                        <Grow in={true} timeout={3000} className={classes.space}>
                            <Typography variant='h4'>
                                Choose Layout
                            </Typography>
                        </Grow>
                        <Grow in={true} timeout={4000} className={classes.space}>
                            <Typography variant='h3'>
                                Print or Save PDF
                            </Typography>
                        </Grow>
                    </CardContent>
                </Card>
                           </Grid>
                           <Grid item sm={12} md={6}>
                            <FrontImg />
                           </Grid>
                       </Grid>

                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </ThemeProvider>
        )
}

export default class Welcome extends Component {
    render() {
        return (
            <>
               <Router>
                    <div>
                            <Header nextStep={this.props.nextStep}/>
                            {/* Go To Header.jsx in Components */}
                    </div>
                        <Switch>
                            <Route path='/about' ><About /></Route>
                            <Route path='/privacypolicy' ><PrivacyPolicy /></Route>
                            <Route path='/' exact><Home /></Route>
                            {/* Go to pages folder in src folder */}
                        </Switch>
             </Router> 
            </>
        )
    }
}
