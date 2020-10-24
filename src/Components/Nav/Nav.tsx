import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/auth.actions';

import {
    StyledNav,
    StyledList,
    StyledListItem,
    StyledLink,
    StyledAction,
    StyledDecorator
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
    const dispatch = useDispatch();

    const handleClick = () => {
        toggle()
        dispatch(logout())
    }

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
                <StyledListItem>
                    <StyledDecorator>----</StyledDecorator>
                </StyledListItem>
                <StyledListItem style={{ color: '#fff' }} onClick={handleClick}>
                    <StyledAction>
                       Logout
                   </StyledAction>
                </StyledListItem>
            </StyledList>
        </StyledNav >
    )
}
