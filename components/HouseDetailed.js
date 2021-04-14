import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import ClickContext from '../contexts/click';

const HouseDetailsWrapper = styled.div`
  display: flex;
`
const LeftColumn = styled.div`
  flex: 30%;
`

const RightColumn = styled.div`
  flex: 70%;
  padding: 0 25px;

  div {
    margin 10px 0;
  }
`

const Image = styled.img`
  width: 100%;
`

const Title = styled.h2`
`

const Description = styled.div`
`

const Address = styled.strong`
`

const Phone = styled.div`
  float: right;
`

const Price = styled.div`
  color: green;
  font-weight: bold;
`

const HouseDetailed = () => {
  const [clickHouse] = useContext(ClickContext);

  return (
    <HouseDetailsWrapper>
      <LeftColumn>
        {clickHouse.images.map(image => <Image src={image} />)}
      </LeftColumn>
      <RightColumn>
        <Title>{clickHouse.product}</Title>
        <Description>{clickHouse.description}</Description>
        <Address>{clickHouse.address.city}, {clickHouse.address.street}</Address>
        <Phone>{clickHouse.phone}</Phone>
        <Price>$ {clickHouse.price}</Price>
      </RightColumn>
    </HouseDetailsWrapper>
  )
}

export default HouseDetailed;