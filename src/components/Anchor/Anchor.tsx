import React , { ReactNode } from 'react';

export interface AnchorProps {
  href: string;
  children: ReactNode;
}

const Anchor = ({href,children}:AnchorProps) => {
  return (
    <a href={href}>{children}</a>
  )
}

export default Anchor