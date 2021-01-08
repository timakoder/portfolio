import React from 'react';
import NextLink from 'next/link';

export type LinkProps = {
  children: React.ReactNode,
  href: string
}

export const Link: React.FC<LinkProps> = ({
  children,
  href
}) => <NextLink href={href}>
  <a>{children}</a>
</NextLink>