import React, { useEffect, useState, useRef } from 'react';
import { Typography, Button, TextField } from '@material-ui/core';
import { CustomInput, CustomButton } from '../../components/Custom.component';
import { CustomCarousel } from '../../components/Carousel.component';
import { useSnackbar } from 'notistack';
import { Messages } from '../../services/messages';
import { Logo } from '../../components/Logo.component';
import { Formik } from 'formik';
import { RecoveryPass } from '../../services/validations';
import API from '../../services/api';
import styled from 'styled-components';

const LoginTitleWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const [clientLicensedId] = useState(53);
  const [document] = useState('');

  const handleLoginSubmit = (values) => {
    const headers = {
      'headers': {
        'clientLicensedId': values.clientLicensedId,
        'document': values.document
      }
    }
    API.get(`/api/v1/UserLogin/RecoveryPass`, headers).then((response) => {
      console.log(response.data.result.message);
    }).catch((err) => {
      enqueueSnackbar(Messages.error.login_failed, { variant: 'error' });
    })
  };

  return (
    <div>
      <LoginTitleWrapper>
        <Logo wrappered />
      </LoginTitleWrapper>

      <CustomCarousel activeIndex={0}>
        <div>
          <Formik
            initialValues={{ clientLicensedId: clientLicensedId, document: document }}
            validationSchema={RecoveryPass}
            onSubmit={(values) => handleLoginSubmit(values)}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;

              return (
                <form onSubmit={handleSubmit}>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    className="default_gray_color"
                  >
                    Recuperação de senha:
                  </Typography>
                  <CustomInput
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    label="ID do licenciado"
                    type="text"
                    size="small"
                    name="clientLicensedId"
                    id="clientLicensedId"
                    helperText={
                      errors.clientLicensedId && touched.clientLicensedId && errors.clientLicensedId
                    }
                    error={errors.clientLicensedId && touched.clientLicensedId}
                    value={values.clientLicensedId}
                  />

                  <CustomInput
                    onChange={handleChange}
                    onBlur={handleBlur}
                    fullWidth
                    label="CPF/CNPJ"
                    type="text"
                    size="small"
                    name="document"
                    id="document"
                    helperText={
                      errors.document &&
                      errors.document &&
                      errors.document
                    }
                    error={errors.document && touched.document}
                    value={values.document}
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
              );
            }}
          </Formik>
        </div>
      </CustomCarousel>
    </div>
  );
}

export default Login;
