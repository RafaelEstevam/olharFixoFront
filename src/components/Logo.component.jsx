import React, { useContext } from 'react';
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GetTheme } from '../services/theme';
import themeContext from '../store/ThemeContext';
import defaultLogo from '../assets/logo.jpg';

const LogoImgWrapper = styled('div')`
  max-width: 150px;
  img {
    width: 100%;
    height: auto;
  }
  max-width: 150px;
  max-height: ${(props) => props.wrappered === 'true' && '40px'};
  overflow: ${(props) => props.wrappered === 'true' && 'hidden'};
  display: ${(props) => props.wrappered === 'true' && 'flex'};
  justify-content: ${(props) => props.wrappered === 'true' && 'center'};
  flex-direction: ${(props) => props.wrappered === 'true' && 'column'};
`;

export function Logo({ wrappered }) {
  const currentThemeContext = useContext(themeContext);

  return (
    <LogoImgWrapper wrappered={wrappered}>
      <img
        src={currentThemeContext?.logo || defaultLogo}
        alt="Logo licenciado"
      />
    </LogoImgWrapper>
  );
}
