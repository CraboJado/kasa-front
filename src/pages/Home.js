import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import banner from '../assets/images/MaskGroup.png'
import '../styles/Home.css'

export default function Home() {

  const [lodgeList, setLodgeList] = useState([])

  useEffect(()=>{

    fetch('./logements.json')
    .then((response) => response.json())
    .then((data) => setLodgeList(data));

  },[])

  return (
    <main className='Home'>
        <Banner img = { banner } page = {'home'} />
        <section className="Home__card-list">
          {
            lodgeList.map( lodge => <Card key = {lodge.id} {...lodge}/> )
          }
        </section>
    </main>
  )
}
