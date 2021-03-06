import React from 'react';
import { Grid, CardContent } from '@material-ui/core';

import styled from 'styled-components';
import { FooterWrapper } from '../../components/Footer.component';
import { LoginImage } from '../../components/LoginImage.component';

const LoginWrapper = styled(Grid)`
  background: #ccc;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px;
`;

const LoginWrapperImg = styled(Grid)`
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
  }
`;

const MainWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  jusfity-content: space-between;
`;
function TemplateAuth({ children }) {
  return (
    <MainWrapper>
      <Grid container>
        <LoginWrapper item md={3} xs={12} className="default_light_background">
          <CardContent>{children}</CardContent>
        </LoginWrapper>
        <LoginWrapperImg item md={9} className="hide-mobile hide-tablet">
          <LoginImage />
        </LoginWrapperImg>
      </Grid>
      <FooterWrapper />
    </MainWrapper>
  );
}

export default TemplateAuth;
