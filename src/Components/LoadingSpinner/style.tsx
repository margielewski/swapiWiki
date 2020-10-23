import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const StyledWrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    top:0;
    left:0;
    z-index:20;
    background-color:rgba(255,255,255,0.3)
`

export const Loader = styled.div`
    border: 0.2em solid rgba(0, 0, 0, 0.3);
    border-top: 0.2em solid #767676;
    border-radius: 50%;
    width: 2.1rem;
    height: 2.1rem;
    animation: ${spin} 0.6s linear infinite;
`