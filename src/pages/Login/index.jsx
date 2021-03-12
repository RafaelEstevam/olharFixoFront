import React, {useEffect, useState} from 'react';
import {FormGroup, Button} from '@material-ui/core';
import {CustonInput, CustonButton} from '../../components/Custon.component';
// import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Link} from 'react-router-dom';
import api from '../../services/api';

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();

    console.log(email);
    console.log(password);
  }

  return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} onError={errors => console.log(errors)}>
          <CustonInput
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            label="E-mail"
            type="email"
            value={email} />

          <CustonInput
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            label="Password"
            type="password"
            value={password} />
          
          <CustonButton type="submit" variant="contained" color="primary">Login</CustonButton>
        </form>
      </div>
  );
}

export default Login;