import React from 'react';
import {
  Grid,
  CardContent,
} from '@material-ui/core';

import styled from 'styled-components';
import loginImage from '../../assets/login-image.png'

const LoginWrapper = styled(Grid)`
  background: #ccc;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px;
`

const LoginWrapperImg = styled(Grid)`
  height: 100vh;
  img{
    width: 100%;
    height: 100%;
  }
`
const FooterWrapper = styled('div')`
  width: 100%;
  height: 6vh;
  position: fixed;
  z-index: 1;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;

  @media(max-width: 767px){
    // flex-direction: column;
    height: auto;
    padding: 15px 15px;
  }
`

const MainWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  jusfity-content: space-between;
`
function TemplateAuth({children}) {
  return (
    <MainWrapper>
      <Grid container>
        <LoginWrapper item md={3} xs={12} className="default_light_background">
          <CardContent>
            {children}
          </CardContent>
        </LoginWrapper>
        <LoginWrapperImg item md={9} className="hide-mobile  hide-tablet">
          <img src={loginImage} />
        </LoginWrapperImg>
      </Grid>
      <FooterWrapper className="main_background">
        <p className="default_light_color hide-mobile">Tecnologia que protege.</p>
        <p className="default_light_color"><b>0800-727-0769</b></p>
        <p className="default_light_color">Feito pela TOTHUS.</p>
      </FooterWrapper>
    </MainWrapper>
  );
}

export default TemplateAuth;