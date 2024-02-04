import './App.css';
import Nav from './components/Nav';
function App() {
  return (
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
  );
}

export default App;
