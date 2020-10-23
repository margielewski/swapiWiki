import { ICharacter, ICharactersResponse } from './../characters/characters.types';
import { IFilm, IFilmsResponse } from './../../types/film';
export const GET_PLANETS_REQUESTED = 'GET_PLANETS_REQUESTED';
export const GET_PLANETS_DONE = 'GET_PLANETS_DONE';
export const GET_PLANETS_FAILED = 'GET_PLANETS_FAILED';

export const GET_PLANET_DETAILS_REQUESTED = 'GET_PLANET_DETAILS_REQUESTED';
export const GET_PLANET_DETAILS_DONE = 'GET_PLANET_DETAILS_DONE';
export const GET_PLANET_DETAILS_FAILED = 'GET_PLANET_DETAILS_FAILED';

export const GET_PLANET_FILMS_DETAILS_DONE = 'GET_PLANET_FILMS_DETAILS_DONE';
export const GET_PLANET_RESIDENTS_DETAILS_DONE = 'GET_PLANET_RESIDENTS_DETAILS_DONE';

export interface IPlanetsResponse {
    count: number
    next: string
    previous: string
    results: IPlanet[]
}

export interface IPlanetsState {
    data: IPlanet[]
    loading: boolean
    error: string
    next: string
    previous: string
}

export interface IPlanetDetailsState {
    data: IPlanet
    loading: boolean
    error: string
    films: IFilm[]
    residents: ICharacter[]
}

export interface IPlanet {
    name: string
    diameter: string
    rotation_period: string
    orbital_period: string
    gravity: string
    population: string
    climate: string
    terrain: string
    surface_water: string
    residents: string[]
    films: string[]
    url: string
    created: string
    edited: string
}

interface IGetPlanetsRequested {
    type: typeof GET_PLANETS_REQUESTED
    payload?: any;
}

interface IGetPlanetsDone {
    type: typeof GET_PLANETS_DONE
    payload: IPlanetsResponse
}

interface IGetPlanetsFailed {
    type: typeof GET_PLANETS_FAILED
    payload: string
}

interface IGetPlanetDetailsRequested {
    type: typeof GET_PLANET_DETAILS_REQUESTED
    payload?: any;
}

interface IGetPlanetDetailsDone {
    type: typeof GET_PLANET_DETAILS_DONE
    payload: IPlanetsResponse
}

interface IGetPlanetDetailsFailed {
    type: typeof GET_PLANET_DETAILS_FAILED
    payload: string
}

interface IGetPlanetFilmsDetailsDone {
    type: typeof GET_PLANET_FILMS_DETAILS_DONE
    payload: IFilmsResponse
}
interface IGetPlanetResidentsDetailsDone {
    type: typeof GET_PLANET_RESIDENTS_DETAILS_DONE
    payload: ICharactersResponse
}

export type PlanetsActions =
    IGetPlanetsFailed |
    IGetPlanetsDone |
    IGetPlanetsRequested;

export type PlanetDetailsActions =
    IGetPlanetDetailsFailed |
    IGetPlanetDetailsDone |
    IGetPlanetDetailsRequested |
    IGetPlanetFilmsDetailsDone |
    IGetPlanetResidentsDetailsDone