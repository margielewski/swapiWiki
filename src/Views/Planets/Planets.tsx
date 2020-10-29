import React from 'react'
import { useSelector } from 'react-redux'

import GridWithPagination from '../../Components/GridWithPagination/GridWithPagination'

import { RootStore } from '../../store/store';
import { getPlanets } from '../../store/planets/planetsList/planets.actions'

import icon from '../../assets/planetIcon.svg'

export default function Planets() {
    const planets = useSelector((state: RootStore) => state.planets)
    console.log(planets);
    return (
        <GridWithPagination routeTo="planets" icon={icon} action={getPlanets} data={planets} />
    )
}