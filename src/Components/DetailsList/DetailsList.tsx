import React from 'react'
import { StyledWrapper, StyledList, StyledTitle, StyledListItem } from './style'

interface IDetailsListProps {
    title: string
    items: any
    itemsKey: string
}

export default function DetailsList({ title, items, itemsKey }: IDetailsListProps) {
    return (
        <StyledWrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledList>
                {items && items.length ? items.map((item: any) => (
                    <StyledListItem key={item[itemsKey]}>{item[itemsKey]}</StyledListItem>
                )) : <StyledListItem>------</StyledListItem>}
            </StyledList>
        </StyledWrapper>
    )
}
