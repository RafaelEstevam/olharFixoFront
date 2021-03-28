import React from 'react';
import styled from 'styled-components';
import HeaderComponent from '../../components/Header.component';
import { Logo } from '../../components/Logo.component';
import { Grid, CardContent, Card } from '@material-ui/core';

const Wrapper = styled('div')`
  display: flex;
`;

const MainWrapper = styled('div')`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled('div')`
  padding: 15px;
  height: 100%;
`;

const MenuWrapper = styled('div')`
  width: 15%;
  min-width: 200px;
  min-height: 100%;
`;

const LogoWrapper = styled('div')`
  display: flex;
  justify-content: center;
  padding: 15px 0px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4) inset;
`;

function TemplateDefault({ children }) {
  return (
    <Wrapper>
      <MenuWrapper className="menu_background">
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </MenuWrapper>
      <MainWrapper>
        <HeaderComponent />
        <ContentWrapper className="default_light_background">
          {children}
        </ContentWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export default TemplateDefault;
