import React, { useState, useEffect } from 'react'

import { StyledWrapper } from './style'

export default function CardsGrid({ data, children }: any) {
    const [dataToDisplay, setDataToDisplay] = useState([])

    useEffect(() => {
        setDataToDisplay(data.results)
    }, [data])

    if (!dataToDisplay || !dataToDisplay.length) return <div style={{ color: '#fff' }}>No data</div>

    return (
        <StyledWrapper>
            {
                dataToDisplay.map((data: any) => {
                    return children(data)
                })
            }
        </StyledWrapper>
    )
}
