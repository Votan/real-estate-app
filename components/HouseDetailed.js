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
  padding: 25px;
`

const Image = styled.img`
  width: 100%;
`

const Title = styled.h2`
  
`

const Description = styled.div`
  
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
        <Image src={clickHouse.images[0]}></Image>
      </LeftColumn>
      <RightColumn>
        <Title>{clickHouse.product}</Title>
        <Description>{clickHouse.description}</Description>
        <Price>$ {clickHouse.price}</Price>
      </RightColumn>
    </HouseDetailsWrapper>
  )
}

export default HouseDetailed;