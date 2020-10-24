import styled from 'styled-components'

export const StyledWrapper = styled.section`
    padding:1rem;
    padding-top:7rem;
    display:flex;
    align-items:center;
    flex-direction:column;
    @media(min-width:900px){
        align-items:center;
    }
    @media(min-width:1200px){
        width:1200px;
        margin:0 auto;
    }
`

export const StyledTitle = styled.h2`
    color:${({ theme }) => theme.colors.light};
    font-size:${({ theme }) => theme.fontSizes.medium};
    padding:1rem 0;
    width:100%;
    text-align:center;
`

export const StyledLabelDataGroup = styled.div`
   padding:.5rem;
   width:100%;
   
`

export const StyledInfoWrapper = styled.div`
    @media(min-width:900px){
        display:flex;
        width:100%;
        justify-content:space-around;
    }
    
`


export const StyledLabel = styled.span`
    color:${({ theme }) => theme.colors.light};
    font-size:${({ theme }) => theme.fontSizes.small};
    margin-right:1rem;
`

export const StyledData = styled.span`
    color:${({ theme }) => theme.colors.primary};
    font-size:${({ theme }) => theme.fontSizes.medium};
    
`

export const StyledSuffix = styled.span`
    color:${({ theme }) => theme.colors.primary};
    font-size:${({ theme }) => theme.fontSizes.small};
    
`



