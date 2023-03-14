import Button from '@mui/material/Button';
import { styled } from '@mui/system';

export const MyButton = styled(Button) `
    color: ${props => props.theme.text[props.color]};
    background-color: ${props => props.theme.palette[props.color].main};
    padding: 8px 16px;
    typography: ${props => props.theme.typography.body1};

    &:hover {
        background-color: ${props => props.theme.palette[props.color].hover};
    }
`;
