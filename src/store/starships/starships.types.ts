import { IFilmsResponse } from '../../types/film';
import { ICharactersResponse } from './../characters/characters.types';

export const GET_STARSHIPS_REQUESTED = 'GET_STARSHIPS_REQUESTED';
export const GET_STARSHIPS_DONE = 'GET_STARSHIPS_DONE';
export const GET_STARSHIPS_FAILED = 'GET_STARSHIPS_FAILED';

export const GET_STARSHIP_DETAILS_REQUESTED = 'GET_STARSHIP_DETAILS_REQUESTED';
export const GET_STARSHIP_DETAILS_DONE = 'GET_STARSHIP_DETAILS_DONE';
export const GET_STARSHIP_DETAILS_FAILED = 'GET_STARSHIP_DETAILS_FAILED';

export const GET_STARSHIP_FILMS_DETAILS_DONE = 'GET_STARSHIP_FILMS_DETAILS_DONE';
export const GET_STARSHIP_PILOTS_DETAILS_DONE = 'GET_STARSHIP_PILOTS_DETAILS_DONE';

export interface IStarshipsResponse {
    count: number
    next: string
    previous: string
    results: IStarship[]
}

export interface IStarshipsResponse {
    count: number
    next: string
    previous: string
    results: IStarship[]
}

export interface IStarshipsState {
    data: IStarship[]
    loading: boolean
    error: string
    next: string
    previous: string
}

export interface IStarshipDetailsState {
    data: IStarship
    loading: boolean
    error: string
    films?: any
    pilots?: any
}

export interface IStarship {
    name: string
    model: string
    vehicle_class: string
    manufacturer: string
    length: string
    cost_in_credits: string
    crew: string
    passengers: string
    max_atmosphering_speed: string
    hyperdrive_rating: string
    MGLT: string
    cargo_capacity: string
    consumables: string
    films: string[]
    pilots: string[]
    url: string
    created: string
    edited: string
}



interface IGetStarshipsRequested {
    type: typeof GET_STARSHIPS_REQUESTED
    payload?: any;
}

interface IGetStarshipsDone {
    type: typeof GET_STARSHIPS_DONE
    payload: IStarshipsResponse
}

interface IGetStarshipsFailed {
    type: typeof GET_STARSHIPS_FAILED
    payload: string
}

interface IGetStarshipDetailsRequested {
    type: typeof GET_STARSHIP_DETAILS_REQUESTED
    payload?: any;
}

interface IGetStarshipDetailsDone {
    type: typeof GET_STARSHIP_DETAILS_DONE
    payload: IStarshipsResponse
}

interface IGetStarshipDetailsFailed {
    type: typeof GET_STARSHIP_DETAILS_FAILED
    payload: string
}

interface IGetStarshipFilmsDetailsDone {
    type: typeof GET_STARSHIP_FILMS_DETAILS_DONE
    payload: IFilmsResponse
}

interface IGetStarshipPilotsDetailsDone {
    type: typeof GET_STARSHIP_PILOTS_DETAILS_DONE
    payload: ICharactersResponse
}


export type StarshipsActions =
    IGetStarshipsFailed |
    IGetStarshipsDone |
    IGetStarshipsRequested;

export type StarshipDetailsActions =
    IGetStarshipDetailsFailed |
    IGetStarshipDetailsDone |
    IGetStarshipDetailsRequested |
    IGetStarshipFilmsDetailsDone |
    IGetStarshipPilotsDetailsDone 
