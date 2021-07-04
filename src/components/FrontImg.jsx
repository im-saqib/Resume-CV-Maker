import React from 'react'

import { useMediaQuery, Card, CardMedia } from '@material-ui/core/';

import resume from './images/Resume.jpg';
import theme from './theme';

export default function FrontImg() {
    const matches = useMediaQuery(theme.breakpoints.up('md'));

  if(matches){
          return (
                <div>
                    <Card >
                        <CardMedia
                        component="img"
                        alt="Resume"
                        image= {resume}
                        height= "450"
                        title='Resume Image'/>
                    </Card>
                </div>
              )
      }else{
          return(
              <></>
          )
      }
}
