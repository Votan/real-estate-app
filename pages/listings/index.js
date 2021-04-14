import React from "react";
import Head from 'next/head'
import HouseList from "../../components/HouseList";

export default function Listings() {

  return (
    <div>
      <Head>
        <title>Houses for Sale</title>
      </Head>
      <div>
        <HouseList />
      </div>
    </div>
  )
}

