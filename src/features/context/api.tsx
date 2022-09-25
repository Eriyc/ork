import React, {FC, PropsWithChildren} from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

const client = new QueryClient({});

export const APIProvider: FC<PropsWithChildren> = ({children}) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
