import { FC, createElement } from 'react';
import Sun from './sun';
import Moon from './moon';
import Meditation from './meditation';

const IconsMapping = {
  sun: Sun,
  moon: Moon,
  meditation: Meditation
}

export type IconName = keyof typeof IconsMapping;

export type IconType = {
  name: IconName,
  className?: string,
  [k: string]: any 
}

export const Icon: FC<IconType> = ({
  name,
  className = '',
  ...props
}) => createElement(IconsMapping[name], { className, ...props });