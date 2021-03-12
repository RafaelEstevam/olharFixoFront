import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FormGroup, Button, TextField} from '@material-ui/core';

const CustonStyledButton = styled(Button)`
    background: #fc0;
`

export function CustonInput({onChange, value, fullWidth, label, type}){
    return (
        <TextField onChange={onChange} value={value} type={type} label={label} fullWidth={fullWidth} variant="filled" />
    )
}

export function CustonButton({type, size}){
    return (
        <CustonStyledButton type={type} size={size} variant="contained" color="primary"></CustonStyledButton>
    )
}