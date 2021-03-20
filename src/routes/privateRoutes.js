import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthTemplate from '../templates/auth';
import DefaultTemplate from '../templates/default';
import ConfigTemplate from '../templates/config';

export default function PrivateRoute({component: Component, isPrivate = false, isConfig = false, ...attrs}){

    const signed = false;

    if(!signed && isPrivate){
        return <Redirect to="/" />
    }

    if(signed && !isPrivate){
        return <Redirect to ="/dashboard" />
    }

    const Layout = signed ? DefaultTemplate : isConfig ? ConfigTemplate : AuthTemplate;

    return(
        <Route
            {...attrs}
            render={props=>(
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );

}