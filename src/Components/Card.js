import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = ({img, name, type, id}) => {

    const Card = styled.article`
        width: 250px;
        height: 350px;
        background-color: white;
        border-radius: 15px;
        box-shadow: 3px 3px 5px #0000008a;
        margin: 10px;
    `
    const Image = styled.figure`
        background-image: url(${img});
        background-repeat: no-repeat;
        background-size: 150px;
        background-position: center;
        width: 100%;
        height: 250px;
        padding: 0;
        margin: 0;
        transition: 0.5s;
        cursor: pointer;
        :hover{
            background-size: 160px;
        }
    `
    const TextArea = styled.section`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 10px;
    `
    const Name = styled.h2`
        margin: 0;
        padding: 0;
    `
    const Detais = styled.p`
        margin: 0;
        padding: 0;
    `

    return (
        <Link to={`/pokemon/${id}`}>
            <Card>
                <Image></Image>
                <TextArea>
                    <Name>{name}</Name>
                    <Detais>type: {type}</Detais>
                </TextArea>
            </Card>
        </Link>
    )
}

export default Card