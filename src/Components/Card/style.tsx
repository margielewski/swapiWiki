import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledWrapper = styled(Link)`
    display:flex;
    padding:2rem;
    flex-direction:column;
    align-items:center;
    border-bottom:1px solid ${({ theme }) => theme.colors.light};
    text-decoration:none;
    @media(min-width:900px){
       width:350px;
       margin:0 1rem;
    }
`

export const StyledImg = styled.figure`
    width:5rem;
    @media(min-width:900px){
        width:6rem;
    }
    img{
        width:100%;
        height:100%;
    }
`

export const StyledText = styled.span`
    color:${({ theme }) => theme.colors.primary};
    font-size:${({ theme }) => theme.fontSizes.medium};
    @media(min-width:900px){
        font-size:${({ theme }) => theme.fontSizes.large};
    }
`

export const StyledLabel = styled.span`
    color:${({ theme }) => theme.colors.light};
    @media(min-width:900px){
        font-size:${({ theme }) => theme.fontSizes.medium};
    }
`