import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components';

const theme = {
    secondary: '#BCAB18',
}

type StyledThemeProps = {
    children: ReactNode,
};

export default function StyledTheme({ children }: StyledThemeProps) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
