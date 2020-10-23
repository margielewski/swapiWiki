import React from 'react'
import { useSelector } from 'react-redux'

import Details from '../../Components/Details/Details'
import DetailsList from '../../Components/DetailsList/DetailsList'
import { getPlanetDetails } from '../../store/planets/planetDetails/planetDetails.actions'

import { RootStore } from '../../store/store'

import { labelsToDisplay } from './labels'


export default function PlanetDetails() {


    const { data, loading, error, films, residents } = useSelector((state: RootStore) => state.planetDetails)



    return (
        <Details action={getPlanetDetails} data={data} loading={loading} labelsToDisplay={labelsToDisplay}>
            <DetailsList title="Films" itemsKey="title" items={films} />
            <DetailsList title="Residents" itemsKey="name" items={residents} />
        </Details>

    )
}
