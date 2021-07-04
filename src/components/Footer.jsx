import React from 'react';
import {
    Typography, Card, Divider, Link
} from '@material-ui/core';

export default function Footer() {
    return (
        <>
                <Card >
                    <Divider/>
                    <Typography variant='body2' align='center'>© Copyright 2021</Typography>
                    <Typography variant='body2' align='center'>This application is proudly developed by</Typography>
                    <Typography variant='body1' align='center' color='secondary'>Muhammad Saqib</Typography>
                    <Typography variant='body2' align='center' gutterBottom>
                    Follow me on <Link href='https://www.github.com/im-saqib'>github</Link> and <Link href='https://www.facebook.com/amazonwebservicespk'>
                    Facebook</Link> for more free, open source awesome projects.
                    </Typography>
                </Card>
        </>
    )
}
