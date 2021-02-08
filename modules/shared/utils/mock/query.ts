import * as React from 'react';

const getEntityMock = <A>(data: A): Promise<A> => new Promise((resolve) => setTimeout(() => resolve(data), 300));

interface QueryState<A> {
  data: A | undefined;
  loading: boolean;
}

export const useQuery = <A>(resolve: A): QueryState<A> => {
  const [{ data, loading }, setState] = React.useState<QueryState<A>>({
    data: undefined,
    loading: true
  });

  React.useEffect(() => {
    getEntityMock(resolve)
      .then((data) => setState((s) => ({ ...s, data })))
      .finally(() => setState((s) => ({ ...s, loading: false })));
  }, [resolve]);

  return {
    data,
    loading
  };
};
