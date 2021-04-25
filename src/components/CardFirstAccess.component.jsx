import { CardContent } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { CustomTitle } from './Custom.component';

import { Logo } from './Logo.component';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SendIcon from '@material-ui/icons/Send';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SettingsIcon from '@material-ui/icons/Settings';
import BuildIcon from '@material-ui/icons/Build';
import WarningIcon from '@material-ui/icons/Warning';

const StyledCard = styled('div')`
  background: #fff;
  box-shadow: 0px 0px 2px rgba(20, 20, 20, 0.2);
  cursor: pointer;
  border-radius: 5px;
  transition: 0.2s linear all;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  min-height: 140px;
  :hover {
    transition: 0.2s linear all;
    // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  svg {
    font-size: 60px;
    transition: 0.1s linear all;
  }
`;

const StyledCardLabel = styled('p')`
  font-size: 20px;
  // font-weight: 100;
  // margin-left: 10px;
  // margin-top: 10px;
`;

const StyledLineCardContent = styled('div')`
  background: #fff;
  // box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: 0.2s linear all;
  padding: 20px;
  display: flex;
  justify-content: start;
`;

const StyledCardDataWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DataWrapper = styled('div')`
  margin-left: 20px;
  width: 100%;
`;

const DataWrapperItem = styled('div')`
  margin-right: 20px;
`;

const CardIcon = styled('div')`
  // border: 5px solid #ccc;
  // box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 1000px;
`;

const CardDataItemLabel = styled('p')`
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  margin-top: 10px;
`;

const CardDataItemContent = styled('p')`
  font-weight: bold;
  font-size: 22px;
  // margin-top: 10px;
`;

const InlineCardIcon = styled('div')`
  svg{
    font-size: 40px;
  }
`

export function GetCardIcon(keyword){

  switch(keyword){
    case 'dashboard':
      return (<DonutLargeIcon />);
    case 'tracking':
      return (<TrackChangesIcon />);
    case 'reports':
      return (<AssessmentIcon />);
    case 'attendance':
      return (<SendIcon />);
    case 'register':
      return (<FormatAlignLeftIcon />);
    case 'management':
      return (<AccountBoxIcon />);
    case 'financial':
      return (<AttachMoneyIcon />);
    case 'settings':
      return (<SettingsIcon />);
    case 'maintenance':
      return (<BuildIcon />);
    case 'accident':
      return (<WarningIcon/>);

    case 'default':
      break;
  }
}

export function CardFirstAccess({ label, icon, onClick, keyword }) {
  return (
    <StyledCard onClick={onClick}>
      <StyledCardContent>
        <CardIcon className={`main_color main_light_background`}>{GetCardIcon(keyword)}</CardIcon>
        <CustomTitle
          fontWeight="400"
          title={label}
          marginTop="10px"
          marginBottom="0px"
          fontSize="20px"
          className="default_gray_color"
        />
      </StyledCardContent>
    </StyledCard>
  );
}

export function CardWarpperData({ title, icon, data }) {
  return (
    <StyledLineCardContent>
      <InlineCardIcon className="main_color">{icon}</InlineCardIcon>
      <DataWrapper>
        <CustomTitle
          fontWeight="400"
          title={title}
          marginTop="0px"
          fontSize="20px"
          className="default_gray_color"
        />
        <StyledCardDataWrapper>
          {data?.map((item) => (
            <DataWrapperItem key={item.label}>
              <CardDataItemLabel className="default_gray_color">
                {item.label}
              </CardDataItemLabel>
              <CardDataItemContent className="default_gray_color">
                {item.value}
              </CardDataItemContent>
            </DataWrapperItem>
          ))}
        </StyledCardDataWrapper>
      </DataWrapper>
    </StyledLineCardContent>
  );
}
