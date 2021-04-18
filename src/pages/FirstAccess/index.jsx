import { CardContent, Grid, Drawer } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import styled from 'styled-components';

import {
  CustomGrid,
  CustomTitle,
  CustomParagraph,
  CustomButton,
  CustomFloatButton,
} from '../../components/Custom.component';

import {
  CardFirstAccess,
  CardWarpperData,
} from '../../components/CardFirstAccess.component';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import TimelineIcon from '@material-ui/icons/Timeline';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SendIcon from '@material-ui/icons/Send';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SettingsIcon from '@material-ui/icons/Settings';

const FirstAccessGrid = styled('div')`
  max-width: 90%;
  margin: 0 auto;
`;

const FirstAccessHeader = styled('div')`
  padding: 30px 15px 60px;
  margin-bottom: -40px;
`;

const FirstAccessFooter = styled('div')`
  padding: 20px 0px;
  margin-top: 10px;
`;

const CustomCardGrid = styled(CustomGrid)`
  @media (min-width: 980px) {
    overflow-y: auto;
    max-height: 100vh;
    padding-bottom: 80px;
  }
`;

const CustomBar = styled('div')`
  height: 5px;
  border-radius: 100px;
  width: 100px;
  margin-bottom: ${(props) => props.marginBottom || '0px'};
  display: block;
  background: rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const DrawerWrapper = styled('div')`
  width: 200px;
  height: 100vh;
`;

const DrawerTitle = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
`;

const DrawerIcon = styled('div')`
  margin-right: 10px;
  svg {
    font-size: 40px;
  }
`;

function DrawerContent({ drawerData }) {
  return (
    <DrawerWrapper className="menu_background">
      <DrawerTitle>
        <DrawerIcon className="default_white_color">
          {drawerData.icon}
        </DrawerIcon>
        <CustomTitle
          fontSize="20px"
          fontWeight="400"
          className="default_white_color"
          title={drawerData.label}
        />
      </DrawerTitle>
    </DrawerWrapper>
  );
}

function FirstAccessPage() {
  const { enqueueSnackbar } = useSnackbar();

  const [title] = useState('Configurações do Sistema');
  const [showData, setShowData] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [drawerData, setDrawerData] = useState('');

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleShowData = () => {
    if (showData) {
      setShowData(false);
    } else {
      setShowData(true);
    }
  };

  const handleGetMenu = (data) => {
    if (openDrawer) {
      setOpenDrawer(false);
    } else {
      setOpenDrawer(true);
    }

    setDrawerData(data);
  };

  const handleDrawer = (toggle) => {
    setOpenDrawer(toggle);
  };

  const menuItems = [
    {
      label: 'Dashboard',
      link: 'dashboard',
      onClick: handleGetMenu,
      openDrawer: false,
      icon: <DonutLargeIcon />,
      iconClass: 'main_color',
    },
    {
      label: 'Rastreamento',
      link: 'tracking',
      onClick: handleGetMenu,
      openDrawer: true,
      icon: <TrackChangesIcon />,
      iconClass: 'main_color',
    },
    {
      label: 'Relatório',
      link: 'reports',
      onClick: handleGetMenu,
      openDrawer: true,
      icon: <AssessmentIcon />,
      iconClass: 'main_color',
    },
    {
      label: 'Atendimento',
      link: 'attendance',
      onClick: handleGetMenu,
      openDrawer: true,
      icon: <SendIcon />,
      iconClass: 'main_color',
    },
    {
      label: 'Cadastro',
      link: 'register',
      onClick: handleGetMenu,
      openDrawer: true,
      icon: <FormatAlignLeftIcon />,
      iconClass: 'main_color',
    },
    {
      label: 'Administrativo',
      link: 'management',
      onClick: handleGetMenu,
      openDrawer: true,
      icon: <AccountBoxIcon />,
      iconClass: 'main_color',
    },
    {
      label: 'Financeiro',
      link: 'financial',
      onClick: handleGetMenu,
      openDrawer: true,
      icon: <AttachMoneyIcon />,
      iconClass: 'main_color',
    },
    {
      label: 'Configurações',
      link: 'settings',
      onClick: handleGetMenu,
      openDrawer: true,
      icon: <SettingsIcon />,
      iconClass: 'main_color',
    },
  ];

  return (
    <Grid container className="default_light_background">
      <CustomCardGrid item sm={12} md={!showData ? 9 : 12}>
        {/* <div className="main_background"> */}
        <FirstAccessGrid>
          <FirstAccessHeader>
            <CustomTitle
              title="Acesso Rápido"
              fontWeight="700"
              className="default_gray_color"
              marginTop="0px"
            />
            <CustomParagraph
              label="asfasd adsadf asdf"
              className="default_gray_color"
            />
            <CustomBar />
          </FirstAccessHeader>
        </FirstAccessGrid>
        {/* </div> */}

        <FirstAccessGrid>
          <CardContent>
            <Grid container spacing={3}>
              {menuItems?.map((item) => (
                <Grid item xs={12} key={item.label} md={3}>
                  <CardFirstAccess
                    onClick={() => item.onClick(item)}
                    icon={item.icon}
                    iconClass={item.iconClass}
                    label={item.label}
                    color={'main_color'}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </FirstAccessGrid>

        {/* <hr />
        <FirstAccessGrid>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <CardFirstAccess label="Configurações" />
              </Grid>
              <Grid item xs={9} md={9}></Grid>
            </Grid>
          </CardContent>
        </FirstAccessGrid> */}

        {/* <FirstAccessFooter className="main_background">
          <FirstAccessGrid>
            <CardContent>
              <Grid container spacing={3}></Grid>
            </CardContent>
          </FirstAccessGrid>
        </FirstAccessFooter> */}
      </CustomCardGrid>

      <CustomCardGrid
        item
        sm={12}
        md={3}
        style={{ display: showData && 'none' }}
        className="main_light_background"
      >
        <CardContent>
          <div>
            <CustomTitle
              title="Dados gerais"
              marginBottom="20px"
              marginTop="20px"
              fontSize="20px"
              fontWeight="700"
              className="default_gray_color"
            />
            <CustomBar marginBottom="30px" />
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <CardWarpperData
                title="Mensagens"
                icon={<MailOutlineIcon />}
                data={[
                  { label: 'Lidos', value: 20 },
                  { label: 'Não lidos', value: 20 },
                ]}
              />
            </Grid>
            <Grid item xs={12}>
              <CardWarpperData
                title="Protocolos"
                icon={<AssignmentIcon />}
                data={[
                  { label: 'Abertos', value: 20 },
                  { label: 'Concluídos', value: 20 },
                ]}
              />
            </Grid>
            <Grid item xs={12}>
              <CardWarpperData
                title="Veículos"
                icon={<DriveEtaIcon />}
                data={[
                  { label: 'Em operação', value: 20 },
                  { label: 'Em manutenção', value: 20 },
                ]}
              />
            </Grid>
            <Grid item xs={12}>
              <CardWarpperData
                title="Documentos"
                icon={<DescriptionIcon />}
                data={[
                  { label: 'Pendentes', value: 20 },
                  { label: 'Assinados', value: 20 },
                ]}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CustomCardGrid>

      <CustomFloatButton
        onClick={handleShowData}
        bg={'main_background'}
        color={'light_color'}
        icon={<TimelineIcon />}
      />

      <Drawer
        open={openDrawer}
        anchor={'left'}
        onClose={() => handleDrawer(false)}
      >
        <DrawerContent drawerData={drawerData} />
      </Drawer>
    </Grid>
  );
}

export default FirstAccessPage;
