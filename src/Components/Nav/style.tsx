import styled from "styled-components";
import { Link } from 'react-router-dom'

export const StyledNav = styled.nav<{ isOpen: boolean }>`
    position:absolute;
    top:100%;
    background:linear-gradient(rgba(0, 0, 0, 0.92),rgba(0, 0, 0, 0.72));
    width:100%;
    min-height:100vh;
    transition:transform .4s ease-in-out;
    transform:${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-150%)'};
    z-index:-1;
`

export const StyledList = styled.ul`
   
`

export const StyledListItem = styled.li`
    text-align:center;
    padding:1.4rem 0;
    
    
`

export const StyledLink = styled(Link)`
    text-decoration:none;
    font-weight:600;
    color:${({ theme }) => theme.colors.primary};
    font-size:${({ theme }) => theme.fontSizes.medium};
`