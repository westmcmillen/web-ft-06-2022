import { useEffect, useState } from "react";

import Card from "./components/Card";
import Search from "./components/Search";

import pokemonData from "./data/pokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [frontUrl, setFrontUrl] = useState("");
  const [backUrl, setBackUrl] = useState("");

  useEffect(() => {
    setPokemon(pokemonData.pokemon[0].pokemon);
  }, []);

  return (
    <div className="fixed inset-0 p-8 space-y-4 bg-neutral-50 bg-neutral-100 overflow-scroll">
      <h1 className="text-4xl font-black text-center">Pokemon</h1>
      <Search
        pokemon={pokemon}
        setPokemon={setPokemon}
        search={search}
        setSearch={setSearch}
        name={name}
        setName={setName}
        hp={hp}
        setHp={setHp}
        frontUrl={frontUrl}
        setFrontUrl={setFrontUrl}
        backUrl={backUrl}
        setBackUrl={setBackUrl}
      />
      <div className="container mx-auto grid grid-cols-3 gap-2">
        {pokemon
          ?.filter(character => character.name.includes(search))
          ?.map(character => {
            return <Card key={character.name} character={character} pokemon={pokemon} setPokemon={setPokemon} />;
          })}
      </div>
    </div>
  );
}

export default App;
