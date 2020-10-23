import React from 'react'
import { useSelector } from 'react-redux'

import Details from '../../Components/Details/Details'
import DetailsList from '../../Components/DetailsList/DetailsList'

import { getCharacterDetails } from '../../store/characters/characterDetails/characterDetails.actions'

import { RootStore } from '../../store/store'

import { labelsToDisplay } from './labels'


export default function CharacterDetails() {


    const { data, loading, error, films, starships, vehicles, species } = useSelector((state: RootStore) => state.characterDetails)



    return (
        <Details action={getCharacterDetails} data={data} loading={loading} labelsToDisplay={labelsToDisplay}>
            <DetailsList title="Films" itemsKey="title" items={films} />
            <DetailsList title="Starships" itemsKey="name" items={starships} />
            <DetailsList title="Vehicles" itemsKey="name" items={vehicles} />
            <DetailsList title="Species" itemsKey="name" items={species} />
        </Details>

    )
}
