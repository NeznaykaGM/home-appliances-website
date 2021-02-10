import * as React from 'react';
import Head from 'next/head';
// import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
// local
// import { theme } from '@md-styles/styled/theme';
import { GlobalStyles } from '../Components/global';
// global css
import 'normalize.css/normalize.css';
import Layout from '../Components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Website | Home</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <Layout>
      <Component {...pageProps}/>
    </Layout>
    <GlobalStyles />
  </>
);

export default MyApp;
