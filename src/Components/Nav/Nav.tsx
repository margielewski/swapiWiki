import React from 'react'

import {
    StyledNav,
    StyledList,
    StyledListItem,
    StyledLink
} from './style'

type NavProps = {
    isOpen: boolean
    toggle: () => void
};

interface INavItem {
    to: string
    nameToDisplay: string
}

const navItems: INavItem[] = [
    {
        to: '/planets',
        nameToDisplay: 'Planets'
    },
    {
        to: '/starships',
        nameToDisplay: 'Starships'
    },
    {
        to: '/characters',
        nameToDisplay: 'Characters'
    }
]

export default function Nav({ toggle, isOpen }: NavProps) {
    return (
        <StyledNav isOpen={isOpen}>
            <StyledList>
                {
                    navItems.map(({ nameToDisplay, to }) => (
                        <StyledListItem key={to} onClick={toggle}>
                            <StyledLink to={to}>{nameToDisplay}</StyledLink>
                        </StyledListItem>
                    ))
                }
            </StyledList>
        </StyledNav>
    )
}
