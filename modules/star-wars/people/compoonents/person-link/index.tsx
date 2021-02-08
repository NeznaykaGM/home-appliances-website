import * as React from 'react';
// components
import Link from 'next/link';

interface Props {
  pId: string;
}

const PersonLink: React.FC<Props> = ({ pId, children }) => (
  <Link href='/people/[id]' as={`/people/${pId}`}>
    <a>{children}</a>
  </Link>
);

export { PersonLink };
