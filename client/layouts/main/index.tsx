import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import Head from 'next/head';
import { Config } from '../../config';
import { ThemeToggler } from '../../components/theme-toggler';
import { Logo } from '../../components/logo';
import { useMediaLoaded } from '../../models/media';
import { MainLoader } from '../../components/loaders/main';
import { Link } from '../../components/common/link';
import { useRouter } from 'next/router';

import styles from './main.module.scss';

export type MainLayoutProps = {
  children: React.ReactNode,
  pageTitle?: string,
  pageDescription?: string,
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  pageTitle = Config.labels.name,
  pageDescription = `${Config.labels.name} web dev portofilio`
}) => {
  const mediaLoaded = useMediaLoaded();

  const [showLoader, setShowLoader] = useState(true);
  
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if(mediaLoaded) {
      setTimeout(() => {
        setShowLoader(false);
      }, 500);
    }
  }, [mediaLoaded]);

  const router = useRouter();

  useEffect(() => {
    console.log(`Path changed`);
    if (mediaLoaded) {
      setContentVisible(false);
      setTimeout(() => setContentVisible(true), 500);
    }
  }, [router.asPath, showLoader]);

  return <>
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content={pageDescription}
      />
      <meta  
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        property="og:image"
        content={`https://og-image.now.sh/${encodeURI(
          pageTitle
        )}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg`}
      />
      <meta name="og:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.rootContainer}>
        {
          !showLoader ? <>
            <header className={styles.headerContainer}>
              <div className={styles.logoContainer}>
                <Link href={Config.pages.home}>
                  <Logo/>
                </Link>
              </div>
              <div className={styles.navigationContainer}>
                <menu className={styles.navigationMenu}>
                  <li>
                    <Link href={Config.pages.photo}>Photo</Link>
                  </li>
                </menu>
              </div>
              <div className={styles.themeTogglerContainer}>
                <ThemeToggler/>
              </div>
            </header>
            <main className={cx(styles.mainContainer, contentVisible && styles.visible)}>
              {children}
            </main>
            <footer></footer>
          </> : <div className={cx(styles.loaderContainer, mediaLoaded && styles.hide)}><MainLoader/></div>
        }
      </div>
    </>
}