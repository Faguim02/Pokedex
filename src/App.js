import './App.css';
import Cards from './Components/Cards';
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonInfo from './Components/PokemonInfo';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/pokemon/:id' element={<PokemonInfo/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
