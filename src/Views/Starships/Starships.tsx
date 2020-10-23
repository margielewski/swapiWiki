import React from 'react'
import { useSelector } from 'react-redux'

import GridWithPagination from '../../Components/GridWithPagination/GridWithPagination'

import { RootStore } from '../../store/store';
import { getStarships } from '../../store/starships/starshipsList/starships.actions'

import icon from '../../assets/starshipIcon.svg'

export default function Starships() {
    const starships = useSelector((state: RootStore) => state.starships)

    return (
        <GridWithPagination routeTo="starships" icon={icon} action={getStarships} data={starships} />
    )
}