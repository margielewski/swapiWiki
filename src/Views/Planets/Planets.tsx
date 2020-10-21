import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import icon from '../../assets/planetIcon.svg'

import CardsGrid from '../../Components/CardsGrid/CardsGrid';

import { getPlanets } from '../../store/planets/planets.actions'
import Card from '../../Components/Card/Card';

export default function Planets() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPlanets())
    }, [dispatch])

    const planets = useSelector((state: any) => state.planets)
    return (
        <CardsGrid data={planets.data}>
            {(props: any) => (
                <Card key={props.name} icon={icon} {...props} />
            )}
        </CardsGrid>
    )
}
