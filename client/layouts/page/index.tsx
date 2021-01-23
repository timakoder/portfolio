import React from 'react';
import { Config } from '../../config';
import Head from 'next/head';

export type PageLayoutProps = {
  children: React.ReactNode,
  pageTitle?: string,
  pageDescription?: string,
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  pageTitle = Config.labels.name,
  pageDescription = `${Config.labels.name} web dev portofilio`
}) => <>
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
  {children}
</>