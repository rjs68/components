import { createTheme } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

export const customTheme = createTheme({
    palette: {
        primary: {
            main: '#006FF9',
            hover: '#025AC7'
        },
        secondary: {
            main: '#FFFFFF',
            hover: '#006FF9',
            border: '#006FF9'
        },
        danger: {
            main: '#F84367',
            hover: '#D4294B'
        },
        disabled: {
            main: '#E5E6EB'
        }
    },
    text: {
        primary: {
            main: '#FFFFFF'
        },
        secondary: {
            main: '#006FF9',
            hover: '#FFFFFF'
        },
        danger: {
            main: '#FFFFFF'
        },
        disabled: {
            main: '#B0B4C5'
        }
    },
    typography: {
        body1: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 400,
            textTransform: 'none'
        }
    },
    space: ['4px', '6px', '8px', '16px', '32px']
  });

export const Font = createGlobalStyle`
  * {
        font-family: Nunito !important;
  }

`
