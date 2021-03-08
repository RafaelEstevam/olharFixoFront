import React, {useEffect, useState} from 'react';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Link} from 'react-router-dom';
import api from '../../services/api';

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();

    api.get('/teste', () => {
      console.log('teste')
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
      <>
        <h1>Login</h1>
        <ValidatorForm onSubmit={handleSubmit} onError={errors => console.log(errors)}>
              <TextValidator
                label="Email"
                name="email"
                value={email}
                validators={['required', 'isEmail']}
                errorMessages={['this field is required', 'email is not valid']}
            />
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </ValidatorForm>
      </>
  );
}

export default Login;