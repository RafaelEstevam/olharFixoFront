import { CardContent, Grid, Drawer, Collapse, ListItemText, ListItemIcon, ListItem, List, ListSubheader, Divider    } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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
  GetCardIcon
} from '../../components/CardFirstAccess.component';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import TimelineIcon from '@material-ui/icons/Timeline';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

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
  width: 250px;
  max-height: 100vh;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`;

const DrawerTitle = styled('div')`
  display: flex;
  justify-content: flex-start;
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

const DrawerMenuWrapper = styled('div')`
  padding: 0px 0px;
`

const DrawerItem = styled(ListItem)`
  color: ${(props) => props.activate ? "#fff" : "#aaa"};
  transition: linear all 0.2s;
  span{
    font-size: 18px;
  }
  :hover{
    color: #fff !important;
    transition: linear all 0.2s;
  }
  svg{
    fill: #aaa
  }
`

const SimpleListItem = styled(ListItem)`
  color: #888 !important;
  padding-left: 72px;
  // transition: linear all 0.2s;
  :hover{
    color: #fff !important;
    // transition: linear all 0.2s;
  }
`

function CollapseDrawerItems({item}){
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const GoToLink = (link) => {
    history.push(link)
  }

  return (
    <>
      {item?.items && item?.items.length > 0 ? (
        <DrawerItem button onClick={() => handleClick()} activate={open}>
          <ListItemIcon>
            {GetCardIcon(item.keyword)}
          </ListItemIcon>
          <ListItemText primary={item.label} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </DrawerItem>
      ) : (
        <SimpleListItem button onClick={() => GoToLink(item.link)} className="main_hover_color">
          <ListItemText primary={item.label} />
        </SimpleListItem>
      )}
      
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.items?.map((subitem) => (
            <CollapseDrawerItems key={subitem.label} item={subitem} />
          ))}
        </List>
      </Collapse>
    </>
  )
}

function DrawerItems({items, isSubitem}){
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {items?.map((item) => (
        <CollapseDrawerItems key={item.label} item={item} />
      ))}
    </List>
  );
}

function DrawerContent({ drawerData }) {
  return (
    <DrawerWrapper className="menu_background">
      <DrawerTitle>
        <DrawerIcon className="default_white_color">
          {GetCardIcon(drawerData.link)}
        </DrawerIcon>
        <CustomTitle
          fontSize="20px"
          fontWeight="400"
          className="default_white_color"
          title={drawerData.label}
        />
      </DrawerTitle>
      <DrawerMenuWrapper>
        <DrawerItems items={drawerData.items} />
      </DrawerMenuWrapper>
    </DrawerWrapper>
  );
}

const menuItems = [
  {
    label: 'Dashboard',
    link: 'dashboard',
    keyword: 'dashboard',
    items: []
  },
  {
    label: 'Rastreamento',
    link: 'tracking',
    keyword: 'tracking',
    items: []
  },
  {
    label: 'Relatório',
    link: 'reports',
    keyword: 'reports',
    items: [
      {
        label: 'Financeiro',
        keyword: 'financial',
        items: [
          {label: 'Relatório de Pedidos', link: 'reports/finances/order-reports'}
        ]
      },
      {
        label: 'Manutenção',
        keyword: 'maintenance',
        items: [
          {label: 'Relatório de revisões', link: 'reports/maintenance/revision-reports'}
        ]
      },
      {
        label: 'Rastreamento',
        keyword: 'tracking',
        items: [
          {label: 'Relátório de quilometragem', link: 'mileage-reports'}
        ]
      },
      {
        label: 'Sinistro',
        keyword: 'accident',
        items: [
          {label: 'Relátório de acidentes', link: 'accident-reports'}
        ]
      }
    ]
  },
  {
    label: 'Atendimento',
    link: 'attendance',
    keyword: 'attendance',
    items: []
  },
  {
    label: 'Cadastro',
    link: 'register',
    keyword: 'register',
    items: []
  },
  {
    label: 'Administrativo',
    link: 'management',
    keyword: 'management',
    items: []
  },
  {
    label: 'Financeiro',
    link: 'financial',
    keyword: 'financial',
    items: []
  },
  {
    label: 'Configurações',
    link: 'settings',
    keyword: 'settings',
    items: []
  },
];

function FirstAccessPage() {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

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

  const handleGoToLink = (data) => {
    history.push(data.link)
  }

  const handleGetMenu = (data) => {
    if(data.items.length > 0){
      if (openDrawer) {
        setOpenDrawer(false);
      } else {
        setOpenDrawer(true);
      }
      setDrawerData(data);
    }else{
      handleGoToLink(data);
    }
  };

  const handleDrawer = (toggle) => {
    setOpenDrawer(toggle);
  };

  return (
    <Grid container className="default_light_background" style={{height: '100vh'}}>
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
                    onClick={() => handleGetMenu(item)}
                    label={item.label}
                    keyword={item.keyword}
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
