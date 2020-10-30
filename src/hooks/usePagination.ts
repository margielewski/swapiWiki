import { useState } from "react";

import { IPlanetsState } from '../store/planets/planets.types';
import { ICharactersState } from '../store/characters/characters.types';
import { IStarshipsState } from '../store/starships/starships.types';

export default function usePagination(
    data: IPlanetsState | ICharactersState | IStarshipsState,
    getData: (num: number) => void
) {
    const [currentPage, setCurrentPage] = useState(1)

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
    return { currentPage, prevPage, nextPage, setCurrentPage }
}
