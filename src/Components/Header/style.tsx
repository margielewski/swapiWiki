import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const StyledHeader = styled.header`
    width:100%;
    display:flex;
    justify-content:center;
    padding:1rem 0;
    position:fixed;
    top:0;
    left:0;
    background:linear-gradient(rgba(0, 0, 0, 0.71),rgba(0, 0, 0, 0.62));
    box-shadow:0px 5px 10px 0px rgba(255, 255, 255, 0.32); 
    z-index:10;
   
`

export const StyledWrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    @media(min-width:1200px){
        justify-content:space-between;
        width:1100px;
        margin:0 auto;
        align-items:center;
    }
    @media(min-width:1400px){
        width:1200px;
    }
`

export const StyledImage = styled(Link)`
    width:6rem;
    img{
        width:100%;
        height:100%;
    }
`