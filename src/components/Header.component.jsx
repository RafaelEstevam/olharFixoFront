import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import BtnConfig from './BtnConfig.component';
import {Logo} from './Logo.component';

const HeaderWrapper = styled('header')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 15px;
`

export default function HeaderComponent(){

    return (
        <>
            <HeaderWrapper className="header_background">
                <Logo wrappered="true" />
                <div>
                    {/* <ul>
                        <Link to='/dashboard'>Dashboard</Link>
                        <Link to='/profile'>Profile</Link>
                    </ul> */}
                </div>
            </HeaderWrapper>
            <BtnConfig />
        </>
    )
}