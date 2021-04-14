import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useContext } from 'react';
import ClickContext from '../contexts/click';

const Card = styled.div`
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 3px;
    float: left;
    height: 300px;
    margin: 15px 30px;
    overflow: hidden;
    padding: 30px;
    width: 300px;
`

const Image = styled.img`
    display: block;
    height: 185px;
    margin: -30px;
    position: relative;
    width: calc(100% + 60px);
`

const Title = styled.h2`
    line-height: 3;
    margin-bottom: 0;

    a {
        color: #000;
        text-decoration: none;
    }
`

const Description = styled.div`
    margin-top: -15px;
`

const Price = styled.div`
    color: green;
    font-weight: bold;
    margin-top: 10px;
`

const HouseCard = (props) => {
    const [clickHouse, setClickHouse] = useContext(ClickContext);

    return (
        <Card>
            <Image src={props.images.shift()}></Image>
            <Title>
                <Link href={"/house/" + props.id}>
                    <a onClick={() => setClickHouse(props)}>{props.product}</a>
                </Link>
            </Title>
            <Description>{props.description.slice(0, 150) + "..."}</Description>
            <Price>$ {props.price}</Price>
        </Card>
    )
}

export default HouseCard;