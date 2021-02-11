import * as React from 'react';
// components
import Link from 'next/link';

const Logo = () => (
  <Link href='/' passHref>
    <a>
      <img src='/static/logos/APP-logo.png' alt='logo' />
    </a>
  </Link>
);

export { Logo };
