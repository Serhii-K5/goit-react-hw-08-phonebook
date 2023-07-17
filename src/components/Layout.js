import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HeaderBar } from './HeaderBar/HeaderBar';
import { Suspense } from 'react';

import { SpringImg } from 'components/SpringImg/SpringImg.jsx';
import css from "styles/Container.module.css";

export const Layout = () => {
  return (
    <div className={css.container}>
      <SpringImg />
      <HeaderBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};