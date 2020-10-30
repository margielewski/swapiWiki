import React from 'react'

import { nameOf } from '../../helpers/nameOf'

import { ICharacter } from '../../store/characters/characters.types'
import { IStarship } from '../../store/starships/starships.types'
import { IFilm } from '../../types/film'
import { ISpecie } from '../../types/specie'
import { IVehicle } from '../../types/vehicle'

import { StyledWrapper, StyledList, StyledTitle, StyledListItem } from './style'

interface IDetailsListProps {
    title: string
    items: (IFilm | IStarship | IVehicle | ISpecie | ICharacter)[]
    itemsKey: string
}

export default function DetailsList({ title, items, itemsKey }: IDetailsListProps) {
    return (
        <StyledWrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledList>
                {items && items.length ? items.map((item) => (
                    <StyledListItem key={nameOf(item, itemsKey as keyof typeof item)}>{nameOf(item, itemsKey as keyof typeof item)}</StyledListItem>
                )) : <StyledListItem>------</StyledListItem>}
            </StyledList>
        </StyledWrapper>
    )
}
