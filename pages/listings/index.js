import React, {useEffect, useState} from "react";
import Head from 'next/head'
import HouseList from "../../components/HouseList";

export default function Listings() {
  const [listings, setListings] = useState([]);

  return (
    <div>
      <Head>
        <title>Houses for Sale</title>
      </Head>
      <div>
        <h2>Houses for Sale</h2>
        <HouseList />
      </div>
    </div>
  )
}

