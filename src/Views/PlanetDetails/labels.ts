import { IPlanet } from "../../store/planets/planets.types";

export interface IPlanetLabelsToDisplay {
    label: string,
    key: keyof IPlanet
    suffix?: string
}

export const labelsToDisplay: IPlanetLabelsToDisplay[] = [
    {
        label: 'Name',
        key: 'name',
    },
    {
        label: 'Population',
        key: 'population',
        suffix: 'people'
    },
    {
        label: 'Climate',
        key: 'climate'
    },
    {
        label: 'Terrain',
        key: 'terrain'
    },
    {
        label: 'Surface Water',
        key: 'surface_water',
        suffix: '%'
    },
    {
        label: 'Diameter',
        key: 'diameter',
        suffix: 'kilometers'
    },
    {
        label: 'Gravity',
        key: 'gravity'
    },
    {
        label: 'Orbital Period',
        key: 'orbital_period',
        suffix: 'days'
    },
    {
        label: 'Rotation Period',
        key: 'rotation_period',
        suffix: 'hours'
    },
]