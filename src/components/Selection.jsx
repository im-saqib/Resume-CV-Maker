import React, { Component, useRef } from 'react';

import LayoutOne from './forms/LayoutOne';
import LayoutTwo from './forms/LayoutTwo';

import {
    ThemeProvider, makeStyles, Typography, Button, Grid, Paper,
    Table, TableBody, TableCell, TableContainer,
    TableRow, Card, CardContent, Divider, Avatar, } from '@material-ui/core';

export default class Selection extends Component {
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
      };
    layOutOne = (e) => {
        e.preventDefault();
        this.props.layOutOne();
    }
    layOutTwo = (e) => {
        e.preventDefault();
        this.props.layOutTwo();
    }
    render() {
        return (
            <div>
                <Button onClick={this.layOutOne}>Layout One</Button>
                <Button onClick={this.layOutTwo}>Layout Two</Button>
                <Button onClick={this.back}>Back</Button>
            </div>
        )
    }
}
