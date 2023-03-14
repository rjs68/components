import { createTheme } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#006FF9',
            hover: '#025AC7'
        },
        danger: {
            main: '#F84367',
            hover: '#D4294B'
        }
    },
    text: {
        primary: '#FFFFFF',
        danger: '#FFFFFF'
    },
    typography: {
        body1: {
            fontFamily: 'Nunito',
            lineHeight: '24px',
            fontWeight: 400,
            textTransform: 'none',
            fontSize: '16px',
        }
    }
  });

export const Font = createGlobalStyle`
  * {
        font-family: Nunito !important;
  }

`
