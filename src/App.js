import './App.css';
import Nav from './components/Nav';
// import { useState } from 'react';

function App() {
  return (
    <>
      <Hero/>
      <Services/>
    </>
  );
}

export default App;

function Hero() {
  return(
    <section id='hero_section'>
      <div className='overlay'>
        <Nav/>

        <div className='hero_txt'>
          <h2>John "Yosh" Jaszcz</h2>
          <p>
            7 time Grammy winning Recording/Mixing Engineer 
            and Producer, who has worked with a wide variety 
            of artists in the music industry from George Clinton, 
            Bootsy Collins, Billy Ray Cyrus, Kirk Franklin, 
            Israel & New Breed and many more.
          </p>
        </div>
      </div>
    </section>
  )
}


function Services() {
  return(
    <section id='services_section'>
      <div className='services_div'>
        <div className='service studios_div'>
          <div className='services_overlay'>
            hello
          </div>
        </div>
        <div className='service mastering_div'>
          <div className='services_overlay'>
            hello
          </div>
        </div>
        <div className='service post_prod_div'>
          <div className='services_overlay'>
            hello
          </div>
        </div>
      </div>
    </section>
  )
}
