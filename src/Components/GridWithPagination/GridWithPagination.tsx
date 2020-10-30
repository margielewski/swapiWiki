import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import CardsGrid from '../CardsGrid/CardsGrid';
import Card from '../Card/Card';
import { IPlanetsState } from '../../store/planets/planets.types';
import { ICharactersState } from '../../store/characters/characters.types';
import { IStarshipsState } from '../../store/starships/starships.types';
import usePagination from '../../hooks/usePagination';

interface IGridWithPagination {
    data: IPlanetsState | ICharactersState | IStarshipsState
    icon: string
    action: (postfix: string) => void
    routeTo: string
}

export default function GridWithPagination({ icon, action, data, routeTo }: IGridWithPagination) {
    const dispatch = useDispatch()
    const [searchString, setSearchString] = useState('')

    const getData = useCallback((pageNumber) => {
        let postfix = ''
        if (searchString && pageNumber !== 1) postfix = `?search=${searchString}&page=${pageNumber}`
        else if (searchString && pageNumber === 1) postfix = `?search=${searchString}`
        else postfix = `?page=${pageNumber}`

        dispatch(action(postfix))
    }, [dispatch, action, searchString])

    const { currentPage, prevPage, nextPage, setCurrentPage } = usePagination(data, getData)

    useEffect(() => {
        getData(1)
    }, [getData])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentPage(1)
        setSearchString(e.target.value)
    }

    return (
        <CardsGrid
            nextPage={nextPage}
            handleChange={handleChange}
            prevPage={prevPage}
            currentPage={currentPage}
            data={data.data}
        >
            {(props) => (
                <Card routeTo={routeTo} key={props.name} icon={icon} {...props} />
            )}
        </CardsGrid>
    )
}
