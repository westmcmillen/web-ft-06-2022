import { useState } from "react";

export default function Card(props) {
  const [src, setSrc] = useState(true);
  return (
    <div key={props.character.name} className="flex flex-col items-center p-8 bg-neutral-50 border border-neutral-400 rounded">
      <h6 className="text-2xl font-black">{props.character.name.toUpperCase()}</h6>
      <p className="">HP: {props.character.hp}</p>
      <img src={src ? props.character.sprites.front : props.character.sprites.back} alt={src ? props.character.sprites.front : props.character.sprites.back} className="" />
      <div className="flex">
        <button className="py-2 px-4 bg-neutral-900 rounded-l text-neutral-50" onClick={() => setSrc(!src)}>
          Flip
        </button>
        <button className="py-2 px-4 bg-neutral-300 rounded-r text-neutral-900" onClick={() => props.setPokemon(props.pokemon.filter(character => character !== props.character))}>
          Delete
        </button>
      </div>
    </div>
  );
}
