import { ICharacter } from "../../store/characters/characters.types";

export interface ICharacterLabelsToDisplay {
    label: string,
    key: keyof ICharacter
    suffix?: string
}

export const labelsToDisplay: ICharacterLabelsToDisplay[] = [
    {
        label: 'Name',
        key: 'name',
    },
    {
        label: 'Birth year',
        key: 'birth_year',
        suffix: ''
    },
    {
        label: 'Eye color',
        key: 'eye_color'
    },
    {
        label: 'Gender',
        key: 'gender'
    },
    {
        label: 'Hair color',
        key: 'hair_color',
        suffix: ''
    },
    {
        label: 'Mass',
        key: 'mass',
        suffix: 'kilograms'
    },
    {
        label: 'Height',
        key: 'height',
        suffix: 'centimeters'
    },
    {
        label: 'Skin color',
        key: 'skin_color'
    },

]




















