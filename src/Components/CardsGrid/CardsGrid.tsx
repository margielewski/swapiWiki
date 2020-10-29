import React, { useState, useEffect, ReactNode, ChangeEvent } from 'react'

import { DebounceInput } from 'react-debounce-input';

import { StyledWrapper, StyledPagination, StyledInputWrapper, StyledCardsContainer } from './style'

import searchIcon from '../../assets/searchIcon.svg'

import Info from '../Info/Info';
import { IPlanet } from '../../store/planets/planets.types';
import { ICharacter } from '../../store/characters/characters.types';
import { IStarship } from '../../store/starships/starships.types';
interface ICardsGrid {
    data: IPlanet[] | ICharacter[] | IStarship[]
    children(data: IPlanet | ICharacter | IStarship): ReactNode
    nextPage: () => void
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    prevPage: () => void
    currentPage: number
}
export default function CardsGrid({ data, children, nextPage, handleChange, prevPage, currentPage }: ICardsGrid) {
    const [dataToDisplay, setDataToDisplay] = useState<(IPlanet | ICharacter | IStarship)[]>([])
    useEffect(() => {
        setDataToDisplay(data)
    }, [data])

    return (
        <StyledWrapper>
            <StyledInputWrapper>
                <label htmlFor="search">search</label>
                <DebounceInput debounceTimeout={500} type="text" id="search" onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} />
                <figure>
                    <img src={searchIcon} alt="" />
                </figure>
            </StyledInputWrapper>
            <StyledCardsContainer>
                {
                    dataToDisplay && dataToDisplay.length ?
                        dataToDisplay.map((data: IPlanet | ICharacter | IStarship) => {
                            return children(data)
                        }) :
                        <Info text="no data" />
                }
            </StyledCardsContainer>
            {
                dataToDisplay && dataToDisplay.length && (
                    <StyledPagination>
                        <button onClick={prevPage}>{'<'}</button>
                        <span>{currentPage}</span>
                        <button onClick={nextPage}>{'>'}</button>
                    </StyledPagination>
                )
            }
        </StyledWrapper >
    )
}
