import React from 'react';
import App, { AppContext, AppProps } from "next/app";
import axios from "../lib/api";
import { NextPage } from 'next';
import { wrapper } from '../store';
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/Header";
import { cookieStringToObject } from "../lib/utils";
import { END } from 'redux-saga';
import {GET_USER_INFO_REQUEST} from "../reducers/user";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
      <>
        <GlobalStyle/>
        <Header/>
        <Component {...pageProps} />
        <div id="root-modal" />
      </>
      );
};


MyApp.getInitialProps = async (context: AppContext) => {
    const appInitialProps = await App.getInitialProps(context);
    const cookieObject = cookieStringToObject(context.ctx.req?.headers.cookie);
    const { store } = context.ctx;
    const { isLogged } = store.getState().user;
    try {
        if (!isLogged && cookieObject.access_token) {
            axios.defaults.headers.cookie = cookieObject.access_token;
            store.dispatch({type: GET_USER_INFO_REQUEST});
            store.dispatch(END);
            await store.sagaTask?.toPromise();
        }
    } catch (e) {
        console.log(e.message);
    }
    return { ...appInitialProps };
};


export default wrapper.withRedux(MyApp);
