import React from 'react'
import styled from 'styled-components'
import logo from '../Resources/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const NavBar = styled.nav`
        display: flex;
        align-items: center;
    `
    const Logo = styled.figure`
        background-image: url(${logo});
        background-size: cover;
        height: 55px;
        width: 150px;
    `
    const SearchArea = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        padding: 10px;
        margin: 5px 15px 5px 5px;
        border-radius: 13px;
    `
    const IconSearch = styled.img`
        width: 25px;
        cursor: pointer;
        transition: 0.6s;
        :hover{
            transform: rotate(360deg);
        }
    `
    const InputSeach = styled.input`
        border: 0;
        outline: 0;
        font-size: 18pt;
    `

    return (
        <NavBar className='NavBar'>
            <Link to={'/'}>
                <Logo></Logo>            
            </Link>
        </NavBar>
    )
}

export default NavBar