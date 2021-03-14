import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {Drawer, Button} from '@material-ui/core';
import {GetTheme} from '../services/theme';
import { useSnackbar } from 'notistack';
import ColorizeIcon from '@material-ui/icons/Colorize';
import ConfigComponent from './Config.component';

import { Messages } from '../services/messages';
import API from '../services/api';

const HeaderWrapper = styled('header')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px;
`

export default function HeaderComponent(){

    const { enqueueSnackbar } = useSnackbar();

    const [openDrawer, setOpenDrawer] = useState(false);
    const [domain] = useState(window.location.origin);
    const [themeConfig, setThemeConfig] = useState();
    const [configData, setConfigData] = useState();

    const handleDrawer = (toggle) =>{
      setOpenDrawer(toggle);
    }

    const handleCloseDrawer = () =>{
        setOpenDrawer(false);
    }

    useEffect(() => {

      const data = {domain: domain}
      
      API.post('/config/get', data ).then((response) => {
        setConfigData(response.data);
      }).catch((err) => {
        enqueueSnackbar(Messages.error.not_config_erro, {variant: 'error'});
      })

      setThemeConfig(GetTheme.getThemeJson());

    }, [openDrawer]);

    return (
        <>
            <HeaderWrapper className="default_white_background">
                <div>
                    <ul>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link to='/profile'>Profile</Link>
                    </ul>
                </div>
                <Button onClick={() => handleDrawer(true)}><ColorizeIcon /></Button>
            </HeaderWrapper>
            <Drawer open={openDrawer} anchor={"right"} onClose={() => handleDrawer(false)}>
                <ConfigComponent config={themeConfig} configData={configData} domain={domain} />
            </Drawer>
        </>
    )
}