import React, { useEffect, useState } from "react";

import { Container } from "./styles";

declare global {
    interface Window {
        handleToogleActive: (() => void) | undefined
    }
}

export const SideMenu: React.FC = ({
    children
}) => {

    const [scrollY, setScrollY] = useState(0)
    const [isActive, setIsActive] = useState(false)


    useEffect(() => {
        function OnScroll (){
            setIsActive(false)
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', OnScroll)
        return () => window.removeEventListener('scroll', OnScroll)
    }, [])

    const classes = [
        isActive ? 'open' : '',
        scrollY <= 300 ? 'scrollOpen' : ''
    ]

    const className = classes.join(' ').trim()

    const handleToogleActive = () => {
        setIsActive(!isActive)
    }

    window.handleToogleActive = handleToogleActive

    return (

        <Container className={className} >
                {children}
        </Container>
    )
}