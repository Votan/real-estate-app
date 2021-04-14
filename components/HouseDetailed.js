import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import ClickContext from '../contexts/click';

const Image = styled.img`
    display: inline-block;
    height: 300px;
    margin: -30px;
    position: relative;
    width: calc(100% + 60px);
`

const Title = styled.h2`
    padding: 0;
`

const Description = styled.div`
    color: blue
`

const Price = styled.div`
    color: green;
    font-weight: bold;
`

const HouseDetailed = () => {
    const [clickHouse] = useContext(ClickContext);

    return (
        <div>
            <Image src={clickHouse.images[0]}></Image>
            <Title>{clickHouse.product}</Title>
            <Description>{clickHouse.description}</Description>
            <Price>$ {clickHouse.price}</Price>
        </div>
    )
}

export default HouseDetailed;