import styled from 'styled-components'

export const StyledWrapper = styled.div`
    color:#fff;
    padding:2rem 0;
    width:100%;
`

export const StyledList = styled.ul`
    list-style-type:none;
    padding-left:.5rem
`

export const StyledTitle = styled.h2`
    font-size:${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.light};
`

export const StyledListItem = styled.li`
    padding:.5rem 0;
    font-size:${({ theme }) => theme.fontSizes.medium};
    color: ${({ theme }) => theme.colors.primary};
`
