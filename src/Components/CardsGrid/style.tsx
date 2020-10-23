import styled from 'styled-components'

export const StyledWrapper = styled.section`
    padding-top:5rem;
    display:flex;
    flex-direction:column;
`

export const StyledInputWrapper = styled.div`
    color:${({ theme }) => theme.colors.light};
    margin:1rem 0;
    display:flex;
    justify-content:center;
    flex-direction:column;
    position:relative;
    padding:0 2rem;
    input{
        padding-left:2rem;
        width:100%;
        background:transparent;
        border:none;
        outline:none;
        color:#fff;
        border-bottom:1px solid ${({ theme }) => theme.colors.light};
        font-size:${({ theme }) => theme.fontSizes.medium}
    }
    figure{
        top:1.4rem;
        position:absolute;
        width:1.4rem;
        img{
            width:100%;
            height:100%;
        }
    }
`

export const StyledPagination = styled.div`
    display:flex;
    justify-content:center;
 
    padding:1rem 0;
    button{
        border:none;
        background:none;
        outline:none;
        color:${({ theme }) => theme.colors.primary};
        font-size:${({ theme }) => theme.fontSizes.large};
    }
    span{
        color:#fff;
        text-align:center;
        padding: 0 1rem;
        color:${({ theme }) => theme.colors.primary};
        font-size:${({ theme }) => theme.fontSizes.medium};
    }
`