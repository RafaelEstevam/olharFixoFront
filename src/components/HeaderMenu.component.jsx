import { IconButton, Popover } from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ReplyIcon from '@material-ui/icons/Reply';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import styled from 'styled-components';
import { CustomIconButton, CustomTypography } from './Custom.component';
import { Logo } from './Logo.component';

const HeaderWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const LoginWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CustomButtonIcon = styled(IconButton)`
  margin-right: ${(props) => (props.right == 'true' ? '10px' : 'inherit;')};
`;

const PopoverWrapper = styled('div')``;

const PopoverMenuItem = styled('div')`
  padding: 8px 15px;
  display: flex;
  cursor: pointer;
  transition: linear all 0.1s !important;
  :hover {
    background: rgba(0, 0, 0, 0.1);
    transition: linear all 0.1s !important;
  }
`;

const PopoverItem = ({ item }) => {
  return (
    <PopoverMenuItem onClick={item.onClick}>
      {item.icon}
      <CustomTypography
        label={item.label}
        style={{ fontSize: '14px', marginLeft: '12px' }}
      />
    </PopoverMenuItem>
  );
};

const PopoverMenu = ({ popoverItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <CustomIconButton
        bg={'main_background'}
        color={'light_color'}
        size="small"
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        <PowerSettingsNewIcon />
      </CustomIconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <PopoverWrapper>
          {popoverItems?.map((item) => (
            <PopoverItem key={item.label} item={item} />
          ))}
        </PopoverWrapper>
      </Popover>
    </div>
  );
};

export function HeaderMenu() {
  const handleClickLink = () => {
    console.log('teste');
  };

  const popoverItems = [
    {
      label: 'Perfil',
      onClick: handleClickLink,
      icon: <PersonIcon />,
    },
    { label: 'Sair', onClick: handleClickLink, icon: <ReplyIcon /> },
  ];

  return (
    <HeaderWrapper>
      <Logo wrappered="true" />
      <LoginWrapper>
        <CustomButtonIcon>
          <SearchIcon />
        </CustomButtonIcon>
        <CustomButtonIcon right="true">
          <HelpOutlineIcon />
        </CustomButtonIcon>

        <PopoverMenu popoverItems={popoverItems} />

        <CustomTypography
          label="Rafael Estevam"
          bold="true"
          style={{ fontSize: '12px', marginLeft: '12px' }}
        />
      </LoginWrapper>
    </HeaderWrapper>
  );
}
