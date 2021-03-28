import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Drawer, Button } from '@material-ui/core';

import { GetTheme, GetDefaultTheme } from '../services/theme';
import { useSnackbar } from 'notistack';
import ColorizeIcon from '@material-ui/icons/Colorize';
import ConfigComponent from './Config.component';
import themeContext from '../store/ThemeContext';

import { Messages } from '../services/messages';
import API from '../services/api';

const FloatingButton = styled(Button)`
  position: fixed;
  right: 0px;
  top: 70px;
`;

export default function BtnConfig() {
  const currentThemeContext = useContext(themeContext);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [domain] = useState(window.location.origin);
  const [themeConfig, setThemeConfig] = useState();

  const handleDrawer = (toggle) => {
    setOpenDrawer(toggle);
  };

  useEffect(() => {
    if (currentThemeContext) {
      setThemeConfig(
        GetTheme.parseThemetoJson(currentThemeContext.second_color)
      );
    } else {
      setThemeConfig(GetDefaultTheme());
    }
  }, [openDrawer]);

  return (
    <>
      <FloatingButton color="default" onClick={() => handleDrawer(true)}>
        <ColorizeIcon />
      </FloatingButton>
      <Drawer
        open={openDrawer}
        anchor={'right'}
        onClose={() => handleDrawer(false)}
      >
        <ConfigComponent
          config={themeConfig}
          configData={currentThemeContext}
          domain={domain}
        />
      </Drawer>
    </>
  );
}
