import React from 'react'
import { useSelector } from 'react-redux'

import Details from '../../Components/Details/Details'
import DetailsList from '../../Components/DetailsList/DetailsList'

import { getStarshipDetails } from '../../store/starships/starshipDetails/starshipDetails.actions'

import { RootStore } from '../../store/store'

import { labelsToDisplay } from './labels'


export default function StarshipDetails() {

    const { data, loading, error, films, pilots } = useSelector((state: RootStore) => state.starshipDetails)

    return (
        <Details title="Starship Details" action={getStarshipDetails} error={error} data={data} loading={loading} labelsToDisplay={labelsToDisplay}>
            <DetailsList title="Films" itemsKey="title" items={films} />
            <DetailsList title="Pilots" itemsKey="name" items={pilots} />
        </Details>

    )
}
