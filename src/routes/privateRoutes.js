import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthTemplate from '../templates/auth';
import DefaultTemplate from '../templates/default';
import ConfigTemplate from '../templates/config';
import FirstAccessTemplate from '../templates/firstAccess';
import {getLocalStorageToken} from  '../services/storage';

export default function PrivateRoute({
  component: Component,
  isPrivate = false,
  isConfig = false,
  isFirstAccess = false,
  ...attrs
}) {
  
  const signed = getLocalStorageToken();

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/first-access" />;
  }

  const Layout =
    signed && isFirstAccess
      ? FirstAccessTemplate
      : signed
      ? DefaultTemplate
      : isConfig
      ? ConfigTemplate
      : AuthTemplate;

  return (
    <Route
      {...attrs}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
