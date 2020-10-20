import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components';

interface ITheme {
    colors: {
        primary: string
        secondary: string
    }
    fontSizes: {
        small: string
        medium: string
        large: string
    }
};

type StyledThemeProps = {
    children: ReactNode,
};

const theme: ITheme = {
    colors: {
        primary: '#BCAB18',
        secondary: '#000',
    },
    fontSizes: {
        small: '1rem',
        medium: '1.4rem',
        large: '1.8rem',
    }

}

export default function StyledTheme({ children }: StyledThemeProps) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
