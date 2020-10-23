import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import CardsGrid from '../CardsGrid/CardsGrid';
import Card from '../Card/Card';

export default function GridWithPagination({ icon, action, data, routeTo }: any) {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const [searchString, setSearchString] = useState('')

    useEffect(() => {
        getData(1)
    }, [searchString])

    const getData = (pageNumber: number) => {
        let postfix = ''
        if (searchString && pageNumber !== 1) postfix = `?search=${searchString}&page=${pageNumber}`
        else if (searchString && pageNumber === 1) postfix = `?search=${searchString}`
        else postfix = `?page=${pageNumber}`

        dispatch(action(postfix))
    }

    const prevPage = () => {
        if (!data.previous) return;
        setCurrentPage(prevVal => {
            const current = --prevVal
            getData(current)
            return current;
        })
    }

    const nextPage = () => {
        if (!data.next) return;
        setCurrentPage(prevVal => {
            const current = ++prevVal
            getData(current)
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
            data={data.data}
        >
            {(props: any) => (
                <Card routeTo={routeTo} key={props.name} icon={icon} {...props} />
            )}
        </CardsGrid>
    )
}
