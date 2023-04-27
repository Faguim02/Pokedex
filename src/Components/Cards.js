import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Card from './Card'

const Cards = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(()=>{
        for(let i = 1; i <= 100; i++){
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(res => setPokemons(prevPokemons => [...prevPokemons, res.data]))
        }
    },[])

    useEffect(() => {
        console.log(pokemons);
    }, [pokemons]);

    const Cards = styled.main`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        margin-top: 100px;
    `
    return (
        <Cards>
            {
                pokemons.map(poke=>{
                    return(
                        <Card id={poke.id} key={poke.id} name={poke.name} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`} type={poke.types[0].type.name}/>
                    )
                })
            }
        </Cards>
    )
}

export default Cards