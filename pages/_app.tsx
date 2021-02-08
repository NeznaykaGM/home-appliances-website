import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
// local
import { theme } from '@md-styles/styled/theme';
import { GlobalStyles } from '@md-styles/styled/global';
// global css
import 'normalize.css/normalize.css';
import Layout from '../Components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>home-appliances-website</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <ThemeProvider theme={theme}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    <GlobalStyles />
  </>
);

export default MyApp;
