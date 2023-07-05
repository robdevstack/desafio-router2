import "./styles.css";
import PokemonDetails from './components/PokemonDetails';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import PokeList from "./components/PokeList";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokeList />} />
          <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
