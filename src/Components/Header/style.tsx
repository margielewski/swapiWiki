import styled from 'styled-components'

export const StyledHeader = styled.header`
    width:100%;
    display:flex;
    justify-content:center;
    padding:1rem 0;
    position:fixed;
    top:0;
    left:0;
    background:linear-gradient(rgba(0, 0, 0, 0.61),rgba(0, 0, 0, 0.32));
    box-shadow:0px 5px 10px 0px rgba(255, 255, 255, 0.32); 
    z-index:10;
`

export const StyledImage = styled.figure`
    width:6rem;
    img{
        width:100%;
        height:100%;
    }
`