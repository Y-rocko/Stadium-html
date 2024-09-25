
import './App.css';
import Rentalheader from './components/rental-header/Rentalheader.js'
import Entrypokemon from './components/entry-pokemon/Entrypokemon.js';
import Boxbar from './components/box-bar/Boxbar.js';
import Rentallist from './components/rental-list/Rentallist.js' ;

function App() {
  return (
    <main>
      <Rentalheader />

      <Entrypokemon />

      <Boxbar />

      <Rentallist />
      
    </main>
  );
}

export default App;
