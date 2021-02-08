import * as React from 'react';
// components
import Link from 'next/link';

const Logo = () => (
  <Link href='/' passHref>
    <a>
      <img src='/static/logos/SW-Logo.png' alt='sw-logo' />
    </a>
  </Link>
);

export { Logo };
