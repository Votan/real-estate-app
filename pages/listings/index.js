import React, {useEffect, useState} from "react";
import HouseCard from '../../components/HouseCard';
import Head from 'next/head'
import { useContext } from 'react'
import ClickContext from '../../contexts/click'


export default function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch('api/listings')
    .then(res => res.json())
    .then(result => {
      setListings(result);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Houses for Sale</title>
      </Head>
      <div>
          <h2>Houses for Sale</h2>
          {listings.map(item => <div key={item.id}>
            <HouseCard {...item}/>
          </div>)}
      </div>
    </div>
  )
}

