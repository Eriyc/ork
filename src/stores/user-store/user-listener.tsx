import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useUser} from '.';

export const UserListener: FC<PropsWithChildren> = ({children}) => {
  // const status = useUser(state => state.status);
  const hydrate = useUser(state => state.hydrate);

  useEffect(() => {
    // disable splash screen

    hydrate(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
