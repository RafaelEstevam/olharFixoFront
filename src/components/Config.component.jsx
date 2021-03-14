import React, {useEffect, useState} from 'react';
import {CardContent} from '@material-ui/core';
import {CustomInput, CustomButton, CustonCardHeader} from './Custom.component';
import { useSnackbar } from 'notistack';
import { Messages } from '../services/messages';
import {Formik } from 'formik';
import {ConfigValidation} from '../services/validations'
import API from '../services/api';
import styled from 'styled-components';

const CustonDrawerConfig = styled('div')`
    max-width: 250px;
`

function ConfigComponent({config}) {

  const { enqueueSnackbar } = useSnackbar();

  const {
    main_color,
    second_color,
    success_color,
    danger_color,
    warning_color,
    info_color,
    inverse_color,
    dark_color,
    light_color
  } = config;

  const [mainColor, setMainColor] = useState(main_color);
  const [secondColor, setSecondColor] = useState(second_color);
  const [successColor, setSuccessColor] = useState(success_color);
  const [dangerColor, setDangerColor] = useState(danger_color);
  const [warningColor, setWarningColor] = useState(warning_color);
  const [infoColor, setInfoColor] = useState(info_color);
  const [inverseColor, setInverseColor] = useState(inverse_color);
  const [darkColor, setDarkColor] = useState(dark_color);
  const [lightColor, setLightColor] = useState(light_color);
  const [refreshForm, setRefreshForm] = useState(false);

  const initialValues = {
    mainColor: mainColor,
    secondColor: secondColor,
    successColor: successColor,
    dangerColor: dangerColor,
    warningColor: warningColor,
    infoColor: infoColor,
    inverseColor: inverseColor,
    darkColor: darkColor,
    lightColor: lightColor,
  }
  
  const handleConfigSubmit = (values) =>{
    console.log(values);
  }

  return (
      <CustonDrawerConfig>
        <CardContent>
            <Formik
                initialValues={initialValues}
                validationSchema={ConfigValidation}
                onSubmit={(values) => handleConfigSubmit(values)}
                // enableReinitialize={refreshForm}
            >
            {(props) => {
                const { values, touched, errors, handleChange, handleBlur, handleSubmit, handleReset} = props;

                return(
                <form onSubmit={handleSubmit}>

                    <CustomInput
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      size="small"
                      label="Cor principal"
                      type="text"
                      name="mainColor"
                      id="mainColor"
                      helperText={(errors.mainColor && touched.mainColor) && errors.mainColor}
                      error={errors.mainColor && touched.mainColor}
                      value={values.mainColor}
                    />

                    <CustomInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        size="small"
                        label="Cor secundária"
                        type="text"
                        name="secondColor"
                        id="secondColor"
                        helperText={(errors.secondColor && touched.secondColor) && errors.secondColor}
                        error={errors.secondColor && touched.secondColor}
                        value={values.secondColor}
                    />

                    <CustomInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        size="small"
                        label="Cor de confirmação"
                        type="text"
                        name="successColor"
                        id="successColor"
                        helperText={(errors.successColor && touched.successColor) && errors.successColor}
                        error={errors.successColor && touched.successColor}
                        value={values.successColor}
                    />
                    <CustomInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        size="small"
                        label="Cor de erro"
                        type="text"
                        name="dangerColor"
                        id="dangerColor"
                        helperText={(errors.dangerColor && touched.dangerColor) && errors.dangerColor}
                        error={errors.dangerColor && touched.dangerColor}
                        value={values.dangerColor}
                    />

                    <CustomInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        size="small"
                        label="Cor de aviso"
                        type="text"
                        name="warningColor"
                        id="warningColor"
                        helperText={(errors.warningColor && touched.warningColor) && errors.warningColor}
                        error={errors.warningColor && touched.warningColor}
                        value={values.warningColor}
                    />
                    <CustomInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        size="small"
                        label="Cor de informação"
                        type="text"
                        name="infoColor"
                        id="infoColor"
                        helperText={(errors.infoColor && touched.infoColor) && errors.infoColor}
                        error={errors.infoColor && touched.infoColor}
                        value={values.infoColor}
                    />

                    <CustomInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        size="small"
                        label="Cor inversa"
                        type="text"
                        name="inverseColor"
                        id="inverseColor"
                        helperText={(errors.inverseColor && touched.inverseColor) && errors.inverseColor}
                        error={errors.inverseColor && touched.inverseColor}
                        value={values.inverseColor}
                    />

                    <CustomInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        size="small"
                        label="Cor escura"
                        type="text"
                        name="darkColor"
                        id="darkColor"
                        helperText={(errors.darkColor && touched.darkColor) && errors.darkColor}
                        error={errors.darkColor && touched.darkColor}
                        value={values.darkColor}
                    />

                    <CustomInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                        size="small"
                        label="Cor clara"
                        type="text"
                        name="lightColor"
                        id="lightColor"
                        helperText={(errors.lightColor && touched.lightColor) && errors.lightColor}
                        error={errors.lightColor && touched.lightColor}
                        value={values.lightColor}
                    />
                    
                    <CustomButton
                        type="submit"
                        label={'Salvar'}
                        bg={'main_color'}
                        color={'light_color'}
                        fullwidth
                        size="small"
                        size="small"
                    />

                </form>
                )
            }}
            </Formik>
        </CardContent>
      </CustonDrawerConfig>
          
  );
}

export default ConfigComponent;