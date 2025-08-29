'use client';

import { Provider } from 'react-redux';

import { Suspense } from 'react';
import getStore from '@/shared/reducers/store';

const store = getStore();

interface ReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  return (
    <Provider store={store}>
      <Suspense>{children}</Suspense>
    </Provider>
  );
}
