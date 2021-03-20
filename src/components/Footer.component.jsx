import React, {useContext} from 'react';
import styled from 'styled-components';

const StyledFooterWrapper = styled('div')`
  width: 100%;
  height: 6vh;
  position: fixed;
  z-index: 1;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;

  @media(max-width: 767px){
    // flex-direction: column;
    height: auto;
    padding: 15px 15px;
  }
`

export function FooterWrapper(){

    return (
        <StyledFooterWrapper className="main_background">
            <p className="default_light_color hide-mobile">Tecnologia que protege.</p>
            <p className="default_light_color"><b>0800-727-0769</b></p>
            <p className="default_light_color">Feito pela TOTHUS.</p>
        </StyledFooterWrapper>
    )
}