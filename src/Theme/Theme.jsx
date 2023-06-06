import { ThemeProvider } from 'styled-components';

const theme = {
    color: {
        lightmode: {
            background: 'var(--midnight-blue)',
            typography: {
                midnightBlue: 'var(--midnight-blue)',
                dustyRose: 'var(--dusty-rose)'
            },
            cta: {
                blushPink: 'var(--blush-pink)',
                coralOrange: 'var(--coral-orange)'
            },
            accent: 'var(--sage-green)'
        }
    }
}

const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;