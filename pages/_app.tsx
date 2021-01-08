import React, { useEffect, useCallback } from 'react';
import { AppProps } from 'next/app';
import { windowWidthChanged } from '../client/models/global';
import { debounce } from '../client/utils';
import { ThemeStorage, changeTheme, Theme } from '../client/models/theme'
import { loadMedia } from '../client/models/media';
import { MainLayout } from '../client/layouts/main';

import '../styles/globals.scss'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const windowSizeChangeListener = useCallback(
    debounce(() => windowWidthChanged(), 300),
    []
  );

  useEffect(() => {
    // setup inital theme
    const theme = ThemeStorage.get();
    changeTheme(theme || Theme.light);
    
    setTimeout(() => {
      const body = document.querySelector('body');
      body?.setAttribute('animated', 'true');
    }, 500)

    // setup is mobile tracking
    windowSizeChangeListener();
    window.addEventListener('resize', windowSizeChangeListener);

    // load media
    loadMedia();

    return () => window.removeEventListener('resize', windowSizeChangeListener);
  }, [])

  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}

export default App;
