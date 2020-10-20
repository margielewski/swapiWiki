import React from 'react'
import { StyledBurger } from './style';

type HamburgerMenuProps = {
    isOpen: boolean
    toggle: () => void
};

export default function HamburgerMenu({ isOpen, toggle }: HamburgerMenuProps) {
    return (
        <StyledBurger onClick={toggle} isOpen={isOpen}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}
