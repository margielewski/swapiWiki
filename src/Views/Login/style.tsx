import styled from 'styled-components'

export const StyledWrapper = styled.section`
    padding-top:10rem;
    display:flex;
    justify-content:center;
`

export const StyledForm = styled.form`
    width:90%;
    display:flex;
    flex-direction:column;
    background:${({ theme }) => `${theme.colors.secondaryLight}F2`};
    padding:1rem;
`

export const StyledInput = styled.input`
    margin:1rem 0;
    padding:.3rem;
    color:#fff;
    outline:none;
    background:transparent;
    border:none;
    font-size:${({ theme }) => theme.fontSizes.small};
    border-bottom:1px solid ${({ theme }) => theme.colors.light};
    &:focus{
        border-bottom:1px solid ${({ theme }) => theme.colors.primary};
    }

`

export const StyledButton = styled.button`
    margin:1rem 0;
    padding:.5rem;
    color:#fff;
    outline:none;
    background:${({ theme }) => theme.colors.primary};
    border:none;
    font-size:${({ theme }) => theme.fontSizes.medium};
    font-weight:600;
`

export const StyledLabel = styled.label`
    color:${({ theme }) => theme.colors.light};
`