import React from 'react';
import styled from 'styled-components';
import HeaderComponent from '../../components/Header.component';
import {Grid, CardContent, Card} from '@material-ui/core';

const Wrapper = styled('div')`
  display: flex;
`;

const MainWrapper = styled('div')`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled('div')`
  padding: 15px;
  height: 100%;
`;

const MenuWrapper = styled('div')`
  width: 15%;
`;

function TemplateDefault({children}) {
  return (
    <Wrapper>
        <MenuWrapper className="main_background">
          menu
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