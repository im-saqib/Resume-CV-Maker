import React from 'react'

import { useTheme, useMediaQuery, Card, CardMedia } from '@material-ui/core/';

import resume from './images/Resume.jpg';

export default function FrontImg() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

  if(matches){
          return (
                <div>
                    <Card>
                        <CardMedia
                        component="img"
                        alt="Resume"
                        image= {resume}
                        height= "380"
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
