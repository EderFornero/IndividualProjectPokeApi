export const filterOptions = {
  db: (pokemon) => typeof pokemon.id === "string",
  api: (pokemon) => typeof pokemon.id === "number",
  none: (pokemon) => pokemon
};

export const filterOptionByType = (type) => {
  if(typeof type === 'string') return  pokemon => pokemon.types.some((t) => t.name === type)
  else return pokemon => pokemon
};

