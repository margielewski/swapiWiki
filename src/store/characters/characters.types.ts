import { IVehiclesResponse } from './../../types/vehicle';
import { ISpeciesResponse } from './../../types/specie';
import { IFilmsResponse } from './../../types/film';
import { IStarshipsResponse } from '../starships/starships.types';
export const GET_CHARACTERS_REQUESTED = 'GET_CHARACTERS_REQUESTED';
export const GET_CHARACTERS_DONE = 'GET_CHARACTERS_DONE';
export const GET_CHARACTERS_FAILED = 'GET_CHARACTERS_FAILED';

export const GET_CHARACTER_DETAILS_REQUESTED = 'GET_CHARACTER_DETAILS_REQUESTED';
export const GET_CHARACTER_DETAILS_DONE = 'GET_CHARACTER_DETAILS_DONE';
export const GET_CHARACTER_DETAILS_FAILED = 'GET_CHARACTER_DETAILS_FAILED';

export const GET_CHARACTER_FILMS_DETAILS_DONE = 'GET_CHARACTER_FILMS_DETAILS_DONE';
export const GET_CHARACTER_SPECIES_DETAILS_DONE = 'GET_CHARACTER_SPECIES_DETAILS_DONE';
export const GET_CHARACTER_STARSHIPS_DETAILS_DONE = 'GET_CHARACTER_STARSHIPS_DETAILS_DONE';
export const GET_CHARACTER_VEHICLES_DETAILS_DONE = 'GET_CHARACTER_VEHICLES_DETAILS_DONE';




export interface ICharactersResponse {
    count: number
    next: string
    previous: string
    results: ICharacter[]
}

export interface ICharactersState {
    data: ICharacter[]
    loading: boolean
    error: string
    next: string
    previous: string
}

export interface ICharacterDetailsState {
    data: ICharacter
    loading: boolean
    error: string
    films?: any
    species?: any
    starships?: any
    vehicles?: any
}

export interface ICharacter {
    name: string
    birth_year: string
    eye_color: string
    gender: string
    hair_color: string
    height: string
    mass: string
    skin_color: string
    homeworld: string
    films: string[]
    species: string[]
    starships: string[]
    vehicles: string[]
    url: string
    created: string
    edited: string
}

interface IGetCharactersRequested {
    type: typeof GET_CHARACTERS_REQUESTED
    payload?: any;
}

interface IGetCharactersDone {
    type: typeof GET_CHARACTERS_DONE
    payload: ICharactersResponse
}

interface IGetCharactersFailed {
    type: typeof GET_CHARACTERS_FAILED
    payload: string
}

interface IGetCharacterDetailsRequested {
    type: typeof GET_CHARACTER_DETAILS_REQUESTED
    payload?: any;
}

interface IGetCharacterDetailsDone {
    type: typeof GET_CHARACTER_DETAILS_DONE
    payload: ICharactersResponse
}

interface IGetCharacterDetailsFailed {
    type: typeof GET_CHARACTER_DETAILS_FAILED
    payload: string
}

interface IGetCharacterFilmsDetailsDone {
    type: typeof GET_CHARACTER_FILMS_DETAILS_DONE
    payload: IFilmsResponse
}

interface IGetCharacterSpeciesDetailsDone {
    type: typeof GET_CHARACTER_SPECIES_DETAILS_DONE
    payload: ISpeciesResponse
}

interface IGetCharacterStarshipsDetailsDone {
    type: typeof GET_CHARACTER_STARSHIPS_DETAILS_DONE
    payload: IStarshipsResponse
}

interface IGetCharacterVehiclesDetailsDone {
    type: typeof GET_CHARACTER_VEHICLES_DETAILS_DONE
    payload: IVehiclesResponse
}

export type CharactersActions =
    IGetCharactersFailed |
    IGetCharactersDone |
    IGetCharactersRequested;

export type CharacterDetailsActions =
    IGetCharacterDetailsFailed |
    IGetCharacterDetailsDone |
    IGetCharacterDetailsRequested |
    IGetCharacterFilmsDetailsDone |
    IGetCharacterSpeciesDetailsDone |
    IGetCharacterStarshipsDetailsDone |
    IGetCharacterVehiclesDetailsDone