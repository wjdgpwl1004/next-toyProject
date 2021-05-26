import React from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { wrapper } from '../store';
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/Header";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
      <>
        <GlobalStyle/>
        <Header/>
        <Component {...pageProps} />
        <div id="root-modal" />
      </>
      );
};

export default wrapper.withRedux(MyApp);
