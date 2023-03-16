import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/system';

export const MyButton = styled(LoadingButton) `
    color: ${props => props.theme.text[props.color].main};
    background-color: ${props => props.theme.palette[props.color].main};
    border: 1px solid;
    border-color:  ${props => props.theme.palette[props.color].border || props.theme.palette[props.color].main};
    padding: ${props => props.small ? `${props.theme.space[1]} ${props.theme.space[2]}` : `${props.theme.space[2]} ${props.theme.space[3]}`};
    ${props => props.theme.typography.body1};

    &:hover {
        color: ${props => props.theme.text[props.color].hover || props.theme.text[props.color].main};
        background-color: ${props => props.theme.palette[props.color].hover};
        border-color: ${props => props.theme.palette[props.color].border || props.theme.palette[props.color].hover};
    }

    &:disabled {
        color: ${props => !props.loading && props.theme.text.disabled.main};
        background-color: ${props => props.theme.palette.disabled.main};
        border-color: ${props => props.theme.palette.disabled.main};
    }
`;
