import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {Drawer, Button} from '@material-ui/core';
import {GetTheme} from '../services/theme';
import { useSnackbar } from 'notistack';
import ColorizeIcon from '@material-ui/icons/Colorize';
import ConfigComponent from './Config.component';

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
    const [config, setConfig] = useState();

    const handleDrawer = (toggle) =>{
        setOpenDrawer(toggle);
    }

    const handleCloseDrawer = () =>{
        setOpenDrawer(false);
    }

    useEffect(() => {
      setConfig(GetTheme.getThemeJson());
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
                <ConfigComponent config={config} />
            </Drawer>
        </>
    )
}