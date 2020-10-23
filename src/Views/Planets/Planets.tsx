import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import icon from '../../assets/planetIcon.svg'

import CardsGrid from '../../Components/CardsGrid/CardsGrid';
import Card from '../../Components/Card/Card';

import { getPlanets } from '../../store/planets/planetsList/planets.actions'
import { RootStore } from '../../store/store';

export default function Planets() {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [searchString, setSearchString] = useState('')

    const planets = useSelector((state: RootStore) => state.planets)

    useEffect(() => {
        getPlanetsData(1)
    }, [])

    useEffect(() => {
        getPlanetsData(1)
    }, [searchString])

    const getPlanetsData = (pageNumber: number) => {
        let postfix = ''
        if (searchString && pageNumber !== 1) postfix = `?search=${searchString}&page=${pageNumber}`
        else if (searchString && pageNumber === 1) postfix = `?search=${searchString}`
        else postfix = `?page=${pageNumber}`

        dispatch(getPlanets(postfix))
    }

    const prevPage = () => {
        if (!planets.previous) return;
        setCurrentPage(prevVal => {
            const current = --prevVal
            getPlanetsData(current)
            return current;
        })
    }

    const nextPage = () => {
        if (!planets.next) return;
        setCurrentPage(prevVal => {
            const current = ++prevVal
            getPlanetsData(current)
            return current;
        })
    }

    const handleChange = (e: any) => {
        setCurrentPage(1)
        setSearchString(e.target.value)
    }

    return (
        <CardsGrid
            nextPage={nextPage}
            handleChange={handleChange}
            prevPage={prevPage}
            currentPage={currentPage}
            data={planets.data}
        >
            {(props: any) => (
                <Card key={props.name} icon={icon} {...props} />
            )}
        </CardsGrid>
    )
}
