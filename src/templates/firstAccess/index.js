import React from 'react';
import { Grid, CardContent } from '@material-ui/core';
import { Logo } from '../../components/Logo.component';
import styled from 'styled-components';
import { HeaderMenu } from '../../components/HeaderMenu.component';
import { FooterWrapper } from '../../components/Footer.component';
import { LoginImage } from '../../components/LoginImage.component';
import HeaderComponent from '../../components/Header.component';
import { CustomGrid, CustomTitle } from '../../components/Custom.component';

// const FirstAccessGrid = styled('div')`
//   max-width: 900px;
//   margin: 0 auto;
// `;

const StyledWrapper = styled('div')`
  @media (min-width: 980px) {
    max-height: 100vh;
    overflow: hidden;
  }
`;

function TemplateFirstAccess({ children }) {
  return (
    <StyledWrapper>
      <HeaderMenu />
      {children}
    </StyledWrapper>
  );
}

export default TemplateFirstAccess;
