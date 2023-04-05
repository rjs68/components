import { createTheme } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

export const newTheme = createTheme({
    main: {
        primary: '#006FF9',
        secondary: '#006FF9',
        link: '#006FF9',
        success: '##13BA9C',
        danger: '#F84367',
        warning: '#FCCD13'
    },
    text: {
        main: '#030E3A',
        secondary: '#006FF9',
        disabled: '#B0B4C5',
        primaryButton: '#FFFFFF'
    },
    background: {
        main: '#F8F8F8',
        container: '#FFFFFF',
        hoverLight: '#E6F1FE',
        hoverDark: '#025AC7',
        hoverError: '#D4294B',
        disabled: '#E5E6EB',
        tableRow: '#FDFDFD',
        success: '#E8F9F6',
        error: '#FFEDF0',
        warning: '#FFFAE8'
    },
    border: {
        main: '#E5E6EB',
        focus: '#006FF9'
    },
    visualizations: {
        color1: '#4367F8',
        color2: '#D945D0',
        color3: '#00C0C7',
        color4: '#FF6C4C',
        color5: '#FFC700',
        color6: '#9C50FD',
        color7: '#ABC700',
        color8: '#295F87',
        color9: '#B8D3DE',
        color10: '#26BC8C'
    },
    typography: {
        heading: {
            fontSize: '24px',
            lineHeight: '34px',
            fontWeight: 700
        },
        mediumHeading: {
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: 700
        },
        smallHeading: {
            fontSize: '18px',
            lineHeight: '26px',
            fontWeight: 700
        },
        copy: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 400
        },
        copyBold: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 700
        },
        copySmall: {
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 400
        }
    },
    space: ['4px', '6px', '8px', '16px', '32px']
});

export const darkTheme = createTheme({
    ...newTheme,
    main: {
        primary: '#3D94FF',
        secondary: '#3D94FF',
        link: '#3D94FF',
        success: '##13BA9C',
        danger: '#F84367',
        warning: '#FCCD13'
    },
    text: {
        main: '#C5D0FC',
        secondary: '#006FF9',
        disabled: '#53538C',
        primaryButton: '#1B1B31'
    },
    background: {
        main: '#1B1B31',
        container: '#20233C',
        hoverLight: '#232643',
        hoverDark: '#272949',
        hoverError: '#D4294B',
        disabled: '#2B2D50',
        tableRow: '#FDFDFD',
        success: '#E8F9F6',
        error: '#FFEDF0',
        warning: '#FFFAE8'
    },
    border: {
        main: '#2B2D50',
        focus: '#3D94FF'
    }
  });

export const Font = createGlobalStyle`
  * {
        font-family: Nunito !important;
        text-transform: none !important;
  }

`
