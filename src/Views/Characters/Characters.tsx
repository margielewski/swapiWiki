import React from 'react'
import { useSelector } from 'react-redux'

import GridWithPagination from '../../Components/GridWithPagination/GridWithPagination'

import { RootStore } from '../../store/store'
import { getCharacters } from '../../store/characters/charactersList/characters.actions'

import icon from '../../assets/characterIcon.svg'

export default function Characters() {
    const characters = useSelector((state: RootStore) => state.characters)
    return (
        <GridWithPagination routeTo="characters" icon={icon} action={getCharacters} data={characters} />
    )
}
