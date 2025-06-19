'use client';

import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  fontFamily: {
    display: 'var(--font-roboto)',
    body: 'var(--font-roboto)',
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CssVarsProvider theme={theme}>
      {children}
    </CssVarsProvider>
  );
} 