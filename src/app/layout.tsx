'use client';

import { ReactNode } from 'react';

import { AppThemeProvider } from '@/shared/providers';

import '@/styles/global.css';

interface IRootLayout {
  children: ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => {
  return (
    <html>
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
