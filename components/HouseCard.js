import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useContext } from 'react';
import ClickContext from '../contexts/click';

const Card = styled.div`
    border: 1px solid;
    border-radius: 3px;
    margin: 30px auto;
    padding: 30px;
    width: 600px;
`

const Image = styled.img`
    display: block;
    height: 300px;
    margin: -30px;
    position: relative;
    width: calc(100% + 60px);
`

const Title = styled.h2`
    color: red
`

const Description = styled.div`
    color: blue
`

const Price = styled.div`
    color: green;
    font-weight: bold;
`

const HouseCard = (props) => {
    const [clickHouse, setClickHouse] = useContext(ClickContext);

    return (
        <Card>
            <Image src={props.image}></Image>
            <Title>
                <Link href={"/house/" + props.id}>
                    <a onClick={() => setClickHouse(props)}>{props.product}</a>
                </Link>
            </Title>
            <Description>{props.description}</Description>
            <Price>$ {props.price}</Price>
        </Card>
    )
}

export default HouseCard;