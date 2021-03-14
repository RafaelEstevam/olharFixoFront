import React, {useEffect, useState, useRef} from 'react';
import {Typography, Button, TextField} from '@material-ui/core';
import {CustomInput, CustomButton} from '../../components/Custom.component';
import {CustomTypography, CustomFormLink} from '../../components/Custom.component';
import {CustomCarousel} from '../../components/Carousel.component';
import { useSnackbar } from 'notistack';
import { Messages } from '../../services/messages';
import {Logo} from '../../components/Logo.component';
import {Formik } from 'formik';
import {LoginValidation, FirsAccessValidation} from '../../services/validations'

import * as Yup from 'yup';
import api from '../../services/api';
import styled from 'styled-components';

const LoginTitleWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

function Login() {

  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [doc, setDoc] = useState('');
  const [userName, setuserName] = useState('');
  const [step, setStep] = useState(0)
  const [values, setValues] = useState(false)

  const handleStep = (step) =>{
    if(step === 1){
      setStep(1);
    }
    if(step === 0){
      setStep(0)
    }
  }

  const handleLoginSubmit = (values) =>{
    console.log(values);
  }

  const handleSubmit = (values) =>{
    console.log(values);
    enqueueSnackbar(Messages.error.registration_failed, {variant: 'error'});
  }

  return (
    
      <div>

        <LoginTitleWrapper>
          <Logo />
          <CustomTypography variant="h6" className="dark_color" bold label="Seja bem vindo!"/>
        </LoginTitleWrapper>

        <CustomCarousel activeIndex={step}>
          <div>
            <Formik
              initialValues={values}
              validationSchema={LoginValidation}
              onSubmit={(values) => handleLoginSubmit(values)}
            >
              {(props) => {
                const { values, touched, errors, handleChange, handleBlur, handleSubmit, handleReset} = props;

                return(
                  <form onSubmit={handleSubmit}>
                    <Typography variant="subtitle1" align="center" className="default_gray_color">
                      Faça seu login:
                    </Typography>
                    <CustomInput
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      label="E-mail"
                      type="email"
                      size="small"
                      name="email"
                      id="email"
                      helperText={(errors.email && touched.email) && errors.email}
                      error={errors.email && touched.email}
                      value={values.email}
                    />

                    <CustomInput
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      label="Password"
                      type="password"
                      size="small"
                      name="password"
                      id="password"
                      helperText={(errors.password && errors.password) && errors.password}
                      error={errors.password && touched.password}
                      value={values.password}
                    />
                    
                    <CustomButton
                      type="submit"
                      label={'Acessar'}
                      bg={'main_color'}
                      color={'light_color'}
                      fullwidth
                      size="small"
                    />
                  </form>
                )
              }}
            </Formik>
            <CustomFormLink onClick={() => handleStep(1)} label="Esqueceu sua senha ou é o primeiro acesso?" color='danger_color' />
          </div>

          <div>
            <Formik
              initialValues={{ doc: doc, userName: userName}}
              validationSchema={FirsAccessValidation}
              onSubmit={(values) => handleLoginSubmit(values)}
            >
              {(props) => {
                const { values, touched, errors, handleChange, handleBlur, handleSubmit, handleReset} = props;

                return(
                  <form onSubmit={handleSubmit}>
                    <Typography variant="subtitle1" align="center" className="default_gray_color">
                      Faça seu login:
                    </Typography>
                    <CustomInput
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      label="CPF/CNPJ"
                      type="text"
                      size="small"
                      name="doc"
                      id="doc"
                      helperText={(errors.doc && touched.doc) && errors.doc}
                      error={errors.doc && touched.doc}
                      value={values.doc}
                    />

                    <CustomInput
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      label="userName"
                      type="text"
                      size="small"
                      name="userName"
                      id="userName"
                      helperText={(errors.userName && errors.userName) && errors.userName}
                      error={errors.userName && touched.userName}
                      value={values.userName}
                    />
                    
                    <CustomButton
                      type="submit"
                      label={'Acessar'}
                      bg={'main_color'}
                      color={'light_color'}
                      fullwidth
                      size="small"
                    />
                  </form>
                )
              }}
            </Formik>
            <CustomFormLink onClick={() => handleStep(0)} label="Lembrei a senha" color='danger_color' />
          </div>
        </CustomCarousel>
      </div>
  );
}

export default Login;