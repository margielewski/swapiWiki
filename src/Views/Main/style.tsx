import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledWrapper = styled.section`
    padding:5rem 0;
    display:flex;
    min-height:100vh;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    @media(min-width:900px){
        flex-direction:row;
    }
    @media(min-width:1200px){
        width:1200px;
        margin:0 auto; 
    }
`

export const StyledImage = styled.figure`
    width:6rem;
    margin:1rem 0;
    @media(min-width:900px){
        width:10rem;
    }
    img{
        width:100%;
        height:100%;
    }
`

export const StyledOption = styled(Link)`
    min-width:20vh;
    text-decoration:none;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const StyledName = styled.span`
    color:${({ theme }) => theme.colors.primary};
    font-size:${({ theme }) => theme.fontSizes.medium};
    font-weight:600;
    @media(min-width:900px){
        font-size:${({ theme }) => theme.fontSizes.large};
    }
`