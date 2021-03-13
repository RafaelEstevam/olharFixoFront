import React, {useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import {CustonInput, CustonButton} from '../../components/Custon.component';
import styled from 'styled-components';
import {GetTheme} from '../../services/theme';
import {CustonTypography} from '../../components/Custon.component';

import {Logo} from '../../components/Logo.component';
import {Link} from 'react-router-dom';
import api from '../../services/api';

const LoginTitleWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
      <div>

        <LoginTitleWrapper>
          <Logo />
          <CustonTypography variant="h6" className="dark_color" bold label="Seja bem vindo!"/>
        </LoginTitleWrapper>
        
        <form onSubmit={handleSubmit} onError={errors => console.log(errors)}>
          <Typography variant="subtitle1" align="center" className="default_gray_color">
            Faça seu login:
          </Typography>
          <CustonInput
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            label="E-mail"
            type="email"
            size="small"
            value={email} />

          <CustonInput
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            label="Password"
            type="password"
            size="small"
            value={password} />
          
          <CustonButton
            type="submit"
            onClick={handleSubmit}
            label={'Acessar'}
            bg={'main_color'}
            color={'light_color'}
            fullwidth
            size="small"
          />
        </form>
      </div>
  );
}

export default Login;