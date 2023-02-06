import React from 'react';
import Banner from '../components/Banner';
import Location from '../components/Location';
import '../styles/Home.css'

export default function Home() {
  return (
    <main>
        <Banner/>
        <section className="location-list">
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
