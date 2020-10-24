import { IStarship } from './../../store/starships/starships.types';

export interface IStarshipLabelsToDisplay {
    label: string,
    key: keyof IStarship
    suffix?: string
}

export const labelsToDisplay: IStarshipLabelsToDisplay[] = [
    {
        label: 'Name',
        key: 'name',
    },
    {
        label: 'model',
        key: 'model',
        suffix: ''
    },
    {
        label: 'vehicle_class',
        key: 'vehicle_class'
    },
    {
        label: 'manufacturer',
        key: 'manufacturer'
    },
    {
        label: 'length',
        key: 'length',
        suffix: 'meters'
    },
    {
        label: 'crew',
        key: 'crew',
        suffix: ''
    },
    {
        label: 'passengers',
        key: 'passengers'
    },
    {
        label: 'max_atmosphering_speed',
        key: 'max_atmosphering_speed',
        suffix: ''
    },
    {
        label: 'hyperdrive_rating',
        key: 'hyperdrive_rating',
        suffix: ''
    },
    {
        label: 'Megalights',
        key: 'MGLT',
        suffix: ''
    },
    {
        label: 'cargo_capacity',
        key: 'cargo_capacity',
        suffix: ''
    },
]


