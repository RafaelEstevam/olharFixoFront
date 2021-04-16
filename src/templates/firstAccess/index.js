import React from 'react';
import { Grid, CardContent } from '@material-ui/core';
import { Logo } from '../../components/Logo.component';
import styled from 'styled-components';
import { HeaderMenu } from '../../components/HeaderMenu.component';
import { FooterWrapper } from '../../components/Footer.component';
import { LoginImage } from '../../components/LoginImage.component';
import HeaderComponent from '../../components/Header.component';

function TemplateFirstAccess({ children }) {
  return (
    <div>
      <HeaderMenu />
      <Grid container>
        <Grid item sm={12} md={9}>
          adf
        </Grid>
        <Grid item sm={12} md={3}>
          adf
        </Grid>
      </Grid>
      {/* <MenuWrapper className="menu_background">
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </MenuWrapper>
      <MainWrapper>
        <HeaderComponent />
        <ContentWrapper className="default_light_background">
          {children}
        </ContentWrapper>
      </MainWrapper> */}
    </div>
  );
}

export default TemplateFirstAccess;
