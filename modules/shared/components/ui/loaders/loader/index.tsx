import * as React from 'react';
// views
import { Wrapper, Circle } from './views';

const Loader: React.FunctionComponent = () => (
  <Wrapper>
    {Array.from(Array(12), (_, i) => i + 1).map((idx) => (
      <Circle key={idx} index={idx} />
    ))}
  </Wrapper>
);

export { Loader };
