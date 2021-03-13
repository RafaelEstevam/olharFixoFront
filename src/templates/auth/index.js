import React from 'react';
import {
  Grid,
  CardContent,
} from '@material-ui/core';
import styled from 'styled-components';
import loginImage from '../../assets/login-image.png'

const LoginWrapper = styled(Grid)`
  background: #ccc;
  height: 94vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
`

const LoginWrapperImg = styled(Grid)`
  height: 94vh;
  img{
    width: 100%;
    height: 100%;
  }
`
const FooterWrapper = styled('div')`
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 15px;
  padding-right: 15px;
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
        <LoginWrapperImg item md={9}>
          <img src={loginImage} />
        </LoginWrapperImg>
      </Grid>
      <FooterWrapper className="main_background">
        <p className="default_light_color">Feito pela TOTHUS.</p>
      </FooterWrapper>
    </MainWrapper>
  );
}

export default TemplateAuth;