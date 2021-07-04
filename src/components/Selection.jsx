import React from 'react';


import {
    ThemeProvider, Typography, Button, Grid, Paper, Card, CardMedia,
    CardContent, CardActions} from '@material-ui/core';

import { layoutTwo } from './theme.js';

export default function Selection (props) {
    const back = (e) => {
        e.preventDefault();
        props.prevStep();
      };
    const layOutOne = (e) => {
        e.preventDefault();
        props.layOutOne();
    }
    const layOutTwo = (e) => {
        e.preventDefault();
        props.layOutTwo();
    }
        return (
            <ThemeProvider theme={layoutTwo}>
                <Paper>
                    <Typography gutterBottom variant='h6' color='action' align='center'></Typography>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12}>
                    <Grid  container direction='row' justify="center" alignItems="center">
                        <Grid item sm={6} lg={4}>
                    <Card style={{textAlign:'center'}}>
                        <CardMedia 
                        component="img"
                        image={"/static/media/Resume-layout1.73796bd3.jpg"} 
                        title='Resume Layout One'
                        />
                            <CardContent>
                        <CardActions>
                            <Button onClick={layOutOne} size="small" variant='contained' color="primary">
                                <Typography  >Classic</Typography>
                            </Button>
                        </CardActions>
                            </CardContent>
                    </Card>
                    </Grid>

                    
                        <Grid item sm={6} lg={4}>
                    <Card style={{textAlign:'center'}}>
                        <CardMedia 
                        component="img"
                        image={"/static/media/layout2.cbfa093c.jpg"} 
                        title='Resume Layout One'
                        />
                            <CardContent>
                        <CardActions>
                            <Button onClick={layOutTwo} size="small" variant='contained' color="primary">
                                <Typography >Trust</Typography>
                            </Button>
                        </CardActions>
                            </CardContent>
                    </Card>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
                <Card>
                  <CardContent>
              <Grid container direction='row' justify="space-around" alignItems="center">
                <Grid item xs={6} lg={2}>
                    <Button variant='contained' color='secondary' fullWidth onClick={back}>Back</Button>
                </Grid>
              </Grid>
                  </CardContent>
                </Card>
                </Paper>
            </ThemeProvider>
        )
}
