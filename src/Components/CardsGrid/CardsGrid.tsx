import React, { useState, useEffect } from 'react'

import { DebounceInput } from 'react-debounce-input';

import { StyledWrapper, StyledPagination, StyledInputWrapper } from './style'

import searchIcon from '../../assets/searchIcon.svg'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

export default function CardsGrid({ data, children, nextPage, handleChange, prevPage, currentPage }: any) {
    const [dataToDisplay, setDataToDisplay] = useState([])
    useEffect(() => {
        setDataToDisplay(data)
    }, [data])



    // if (!dataToDisplay || !dataToDisplay.length) return <div style={{ color: '#fff' }}>No data</div>

    return (
        <StyledWrapper>
            <StyledInputWrapper>
                <label htmlFor="search">search</label>
                <DebounceInput debounceTimeout={500} type="text" id="search" onChange={(e) => handleChange(e)} />
                <figure>
                    <img src={searchIcon} alt="" />
                </figure>
            </StyledInputWrapper>
            {
                dataToDisplay && dataToDisplay.length ?
                    dataToDisplay.map((data: any) => {
                        return children(data)
                    }) :
                    <div style={{ textAlign: 'center', color: '#fff' }}>No data</div>
            }
            {
                dataToDisplay && dataToDisplay.length && (
                    <StyledPagination>
                        <button onClick={prevPage}>{'<'}</button>
                        <span>{currentPage}</span>
                        <button onClick={nextPage}>{'>'}</button>
                    </StyledPagination>
                )
            }
        </StyledWrapper >
    )
}
