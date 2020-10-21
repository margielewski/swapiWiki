import styled from 'styled-components'

export const StyledWrapper = styled.section`
    padding-top:7rem;
    display:flex;
    min-height:100vh;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
`

export const StyledImage = styled.figure`
    width:6rem;
    margin:1rem 0;
    img{
        width:100%;
        height:100%;
    }
`

export const StyledOption = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const StyledName = styled.span`
    color:${({ theme }) => theme.colors.primary};
    font-size:${({ theme }) => theme.fontSizes.medium}
`