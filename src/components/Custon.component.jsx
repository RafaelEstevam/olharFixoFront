import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {TextField, Typography} from '@material-ui/core';
import {GetTheme} from '../services/theme';


const CustonStyledTextField = styled(TextField)`
    margin-bottom: 15px;
`

const CustonStyledTypography = styled(Typography)`
    font-weight: ${props => props.bold && 'bold'};
`

const CustonStyledButton = styled('button')`
    border: 0px solid;
    border-radius: 4px;
    background-color: ${props => props.bg && props.bg};
    color: ${props => props.color && props.color};
    font-weight: bold;
    text-transform: uppercase;
    padding: 12px 15px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.3);
    cursor: pointer;
    transition: linear all 0.1s !important;
    width: ${props => props.fullwidth ? '100%' : 'inherit'};
    height: ${props => props.size === 'small' ? '40px' : '56px'};
    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
        box-shadow: 0px 1px 3px rgba(0,0,0,0.3), 0px 0px 100px inset rgba(0,0,0,0.2);
        transition: linear all 0.1s !important;
    }
`

export function CustonInput({onChange, value, fullWidth, label, type, size}){
    return (
        <CustonStyledTextField
            onChange={onChange}
            value={value}
            type={type}
            label={label}
            fullWidth={fullWidth}
            variant="outlined"
            size={size}
        />
    )
}

export function CustonButton({type, label, custonClass, bg, color, fullwidth, size, onClick}){
    return (
        <CustonStyledButton
            type={type}
            className={custonClass}
            bg={GetTheme.getConfigJson(bg)}
            color={GetTheme.getConfigJson(color)}
            fullwidth={fullwidth}
            onClick={onClick}
            size={size}
        >
            {label}
        </CustonStyledButton>
    )
}

export function CustonTypography({variant, className, label, bold}){
    return (
        <CustonStyledTypography
            variant={variant} className={className} bold={bold}
        >
            {label}
        </CustonStyledTypography>
    )
}