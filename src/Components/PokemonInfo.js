import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import '../App.css'

const PokemonInfo = () => {

    const {id} = useParams()
    const [pokemon, setPokemon] = useState({})

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemon(res.data))
    },[])

    const PokemonInfo = styled.div`
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const Container = styled.main`
        box-shadow: 3px 3px 5px #0000008a;
        background-color: white;
        width: 60%;
        height: 500px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const Division = styled.article`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `
    const Image = styled.img`
        object-fit: contain;
        width: 100%;
        height: 100%;
    `
    const TextCamp = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin: 7px;
    `
    const Pergunta = styled.strong`
        margin: 5px;
    `
    const Resposta = styled.p`
    
    `
    const AreaText = styled.div`
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: baseline;
        flex-direction: column;
    `

    return (
        <PokemonInfo>
            <Container className='ContainerInfo'>
                <Division>
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt='pokemon'/>
                </Division>
                <Division>
                    <AreaText>
                        <TextCamp>
                            <Pergunta>Nome: </Pergunta><Resposta>{pokemon.name}</Resposta>
                        </TextCamp>
                        <TextCamp>
                            <Pergunta>Experiencia: </Pergunta><Resposta>{pokemon.base_experience}</Resposta>
                        </TextCamp>
                        <TextCamp>
                            <Pergunta>Altura: </Pergunta><Resposta>{pokemon.height}0 cm</Resposta>
                        </TextCamp>
                        <TextCamp>
                            <Pergunta>Peso: </Pergunta><Resposta>{pokemon.weight}kg</Resposta>
                        </TextCamp>
                        <TextCamp>
                            <Pergunta></Pergunta><Resposta></Resposta>
                        </TextCamp>
                    </AreaText>
                </Division>
            </Container>
        </PokemonInfo>
    )
}

export default PokemonInfo