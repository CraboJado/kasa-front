import React from 'react';
import Banner from '../components/Banner';
import Location from '../components/Location';
import banner from '../assets/images/MaskGroup.png'
import '../styles/Home.css'

export default function Home() {
  return (
    <main className='Home'>
        <Banner img = { banner } page = {'home'} />
        <section className="Home__location-list">
          {/* map array to generate Location */}
            <Location/>
            <Location/>
            <Location/>
            <Location/>
            <Location/>
            <Location/>
        </section>
    </main>
  )
}
