import React, {useEffect, useState, useRef} from 'react';
import {Typography, Button, TextField} from '@material-ui/core';
import {CustomInput, CustomButton} from '../../components/Custom.component';
import {CustomTypography, CustomFormLink} from '../../components/Custom.component';
import {CustomCarousel} from '../../components/Carousel.component';
import { useSnackbar } from 'notistack';
import { Messages } from '../../services/messages';
import {Logo} from '../../components/Logo.component';
import {Formik } from 'formik';
import {RecoveryPass} from '../../services/validations'

import API from '../../services/api';
import styled from 'styled-components';

const LoginTitleWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

function Login() {

  const { enqueueSnackbar } = useSnackbar();

  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const handleLoginSubmit = (values) =>{
    console.log(values);
  }

  return (
    
      <div>

        <LoginTitleWrapper>
          <Logo wrappered />
        </LoginTitleWrapper>

        <CustomCarousel activeIndex={0}>
          <div>
            <Formik
              initialValues={{password:password, confPassword: confPassword}}
              validationSchema={RecoveryPass} onSubmit={(values) => handleLoginSubmit(values)}
            >
              {(props) => {
                const { values, touched, errors, handleChange, handleBlur, handleSubmit, handleReset} = props;

                return(
                  <form onSubmit={handleSubmit}>
                    <Typography variant="subtitle1" align="center" className="default_gray_color">
                      Alteração de senha:
                    </Typography>
                    <CustomInput
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      label="Senha"
                      type="password"
                      size="small"
                      name="password"
                      id="password"
                      helperText={(errors.password && touched.password) && errors.password}
                      error={errors.password && touched.password}
                      value={values.password}
                    />

                    <CustomInput
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      label="Confirme a senha"
                      type="password"
                      size="small"
                      name="confPassword"
                      id="confPassword"
                      helperText={(errors.confPassword && errors.confPassword) && errors.confPassword}
                      error={errors.confPassword && touched.confPassword}
                      value={values.confPassword}
                    />
                    
                    <CustomButton
                      type="submit"
                      label={'Confirmar'}
                      bg={'main_background'}
                      color={'light_color'}
                      fullwidth
                      size="small"
                    />
                  </form>
                )
              }}
            </Formik>
          </div>
        </CustomCarousel>
      </div>
  );
}

export default Login;