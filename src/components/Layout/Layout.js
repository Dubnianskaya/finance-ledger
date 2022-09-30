import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
