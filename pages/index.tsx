import * as React from 'react';
import styles from '@md-modules/shared/styles/Home.module.css';
import { MainLayout } from '@md-modules/shared/layouts/main';

const Home = () => {
  // env example
  // console.log(process.env.ANALYTICS_ID) for server side
  // console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID) for client side
  return (
    <MainLayout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h2 className={styles.title}>
            Welcome to <a href='https://nextjs.org'>Next.js!</a>
          </h2>

          <p className={styles.description}>
            Get started by editing <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href='https://nextjs.org/docs' className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href='https://nextjs.org/learn' className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a href='https://github.com/vercel/next.js/tree/master/examples' className={styles.card}>
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
          </a>
        </footer>
      </div>
    </MainLayout>
  );
};

export default Home;
