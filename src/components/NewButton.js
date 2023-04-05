import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/system';

export const Button = styled(LoadingButton) `
    color: ${props => props.theme.text.primaryButton};
    background-color: ${props => props.theme.main.primary};
    border: 1px solid;
    border-color:  ${props => props.theme.main.primary};
    padding: ${props => props.small ? `${props.theme.space[1]} ${props.theme.space[2]}` : `${props.theme.space[2]} ${props.theme.space[3]}`};
    height: 42px;
    box-sizing: border-box;
    ${props => props.theme.typography.copy};

    &:hover {
        background-color: ${props => props.theme.background.hoverDark};
        border-color:  ${props => props.theme.background.hoverDark};
    }

    &:disabled {
        color: ${props => !props.loading && props.theme.text.disabled};
        background-color: ${props => props.theme.background.disabled};
        border-color:  ${props => props.theme.background.disabled};
    }
`;

export const SecondaryButton = styled(Button) `
    color: ${props => props.theme.text.secondary};
    background-color: ${props => props.theme.background.container};
    border-color:  ${props => props.theme.main.secondary};

    &:hover {
        color: ${props => props.theme.text.primaryButton};
        background-color: ${props => props.theme.main.secondary};
        border-color: ${props => props.theme.main.secondary};
    }
`;

export const DangerButton = styled(Button) `
    background-color: ${props => props.theme.main.danger};
    border-color:  ${props => props.theme.main.danger};

    &:hover {
        background-color: ${props => props.theme.background.hoverError};
        border-color: ${props => props.theme.background.hoverError};
    }
`
