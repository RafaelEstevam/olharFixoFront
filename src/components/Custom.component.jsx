import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {TextField, Typography} from '@material-ui/core';
import {GetTheme, GetDefaultTheme} from '../services/theme';
import { TextValidator } from 'react-material-ui-form-validator';


const CustomStyledTextField = styled(TextValidator)`
    margin-bottom: 15px;
`

const CustonTextField = styled(TextField)`
    margin-bottom: 15px;
`

const CustomStyledTypography = styled(Typography)`
    font-weight: ${props => props.bold && 'bold'};
`

const CustonStyledLink = styled('a')`
    color: ${props => props.color && props.color};
    font-weight: bold;
    text-align: center;
    display: block;
    font-size: 0.8em;
    margin-top: 15px;
    cursor: pointer;

    :hover{
        color: ${props => props.color && props.color};
    }
`

const CustomStyledButton = styled('button')`
    border: 0px solid;
    border-radius: 4px;
    background-color: ${props => props.bg};
    color: ${props => props.color};
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
    :active{
        box-shadow: 0px 0px 10px ${props => props.bg}, 0px 0px 100px inset rgba(0,0,0,0.2);
    }
`

export function CustomInput({onChange, onBlur, value, fullWidth, label, type, size, required, readonly, disabled, error, helperText, name, id}){
    return (
        <CustonTextField
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type={type}
            label={label}
            fullWidth={fullWidth}
            size={size}
            required={required}
            readOnly={readonly}
            disabled={disabled}
            error={error}
            helperText={helperText}
            name={name}
            id={id}
            variant="outlined"
        />
    )
}

export function CustomInputValidator({onChange, value, fullWidth, label, type, size, validators, errorMessages}){
    return (
        <CustomStyledTextField
            onChange={onChange}
            value={value}
            type={type}
            label={label}
            fullWidth={fullWidth}
            variant="outlined"
            size={size}
            validators={validators}
            errorMessages={errorMessages}
        />
    )
}

export function CustomButton({type, label, CustomClass, bg, color, fullwidth, size, onClick, disabled}){

    return (
        <CustomStyledButton
            type={type}
            className={CustomClass}
            bg={GetTheme.getConfigJson(bg)}
            color={GetTheme.getConfigJson(color)}
            fullwidth={fullwidth}
            onClick={onClick}
            size={size}
            disabled={disabled}
        >
            {label}
        </CustomStyledButton>
    )
}

export function CustomTypography({variant, className, label, bold}){
    return (
        <CustomStyledTypography
            variant={variant} className={className} bold={bold}
        >
            {label}
        </CustomStyledTypography>
    )
}

export function CustomFormLink({onClick, label, color}){
    return (
        <CustonStyledLink color={GetTheme.getConfigJson(color)} onClick={onClick}>
            {label}
        </CustonStyledLink>
    )
}