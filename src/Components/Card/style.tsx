import styled from 'styled-components'

export const StyledWrapper = styled.div`
    display:flex;
    padding:2rem;
    flex-direction:column;
    align-items:center;
    border-bottom:1px solid ${({ theme }) => theme.colors.light};
    
`

export const StyledImg = styled.figure`
    width:5rem;
    img{
        width:100%;
        height:100%;
    }
`

export const StyledText = styled.span`
    color:${({ theme }) => theme.colors.primary};
    font-size:${({ theme }) => theme.fontSizes.medium};
`

export const StyledLabel = styled.span`
    color:${({ theme }) => theme.colors.light};
`