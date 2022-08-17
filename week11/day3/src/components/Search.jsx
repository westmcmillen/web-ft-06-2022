export default function Search(props) {
  return (
    <form
      className="container p-4 border border-neutral-400 rounded"
      onSubmit={e => {
        e.preventDefault();
        console.log([
          ...props.pokemon,
          {
            id: props.pokemon.length + 1,
            name: props.name,
            hp: props.hp,
            sprites: {
              front: props.frontUrl,
              back: props.backUrl,
            },
          },
        ]);
        props.setPokemon([
          ...props.pokemon,
          {
            id: props.pokemon.length + 1,
            name: props.name,
            hp: props.hp,
            sprites: {
              front: props.frontUrl,
              back: props.backUrl,
            },
          },
        ]);
      }}
    >
      <div className="flex flex-col h-full gap-y-4">
        <input
          type="text"
          className="w-full h-full p-4 bg-neutral-50 border border-neutral-400 rounded"
          placeholder="Search"
          value={props.search}
          onChange={e => {
            props.setSearch(e.target.value);
          }}
        />
        <div className="flex h-full gap-x-4">
          <input
            type="text"
            className="w-full h-full p-4 bg-neutral-50 border border-neutral-400 rounded"
            placeholder="Pokemon"
            value={props.name}
            onChange={e => {
              props.setName(e.target.value);
            }}
          />
          <input
            type="text"
            className="w-full h-full p-4 bg-neutral-50 border border-neutral-400 rounded"
            placeholder="HP"
            value={props.hp}
            onChange={e => {
              props.setHp(e.target.value);
            }}
          />
          <input
            type="text"
            className="w-full h-full p-4 bg-neutral-50 border border-neutral-400 rounded"
            placeholder="Front Image"
            value={props.frontrUrl}
            onChange={e => {
              props.setFrontUrl(e.target.value);
            }}
          />
          <input
            type="text"
            className="w-full h-full p-4 bg-neutral-50 border border-neutral-400 rounded"
            placeholder="Back Image"
            value={props.backUrl}
            onChange={e => {
              props.setBackUrl(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="py-4 px-8 bg-indigo-500 rounded text-white">
          Add
        </button>
      </div>
    </form>
  );
}
