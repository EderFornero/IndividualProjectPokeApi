// export const getTypeClass = (pokemon) => {
//   const typeNames = pokemon.types.map(type => type.name);

//   //fire combo
//   if (typeNames.includes('fire') && typeNames.includes('dark')) return 'fire-dark-card';
//   else if (typeNames.includes('fire') && typeNames.includes('rock')) return 'fire-rock-card';
//   else if (typeNames.includes('fire') && typeNames.includes('flying')) return 'fire-flying-card';
  
  
//   //water combo
//   else if (typeNames.includes('water') && typeNames.includes('electric')) return 'water-electric-card';
//   else if (typeNames.includes('water') && typeNames.includes('poison')) return 'water-poison-card';
//   else if (typeNames.includes('water') && typeNames.includes('ice')) return 'water-ice-card';
//   else if (typeNames.includes('water') && typeNames.includes('flying')) return 'water-flying-card';
//   else if (typeNames.includes('water') && typeNames.includes('psychic')) return 'water-psychic-card';
//   else if (typeNames.includes('water') && typeNames.includes('fighting')) return 'water-fighting-card';
//   else if (typeNames.includes('water') && typeNames.includes('ground')) return 'water-ground-card';
//   else if (typeNames.includes('water') && typeNames.includes('fairy')) return 'water-fairy-card';
//   else if (typeNames.includes('water') && typeNames.includes('dragon')) return 'water-dragon-card';
//   else if (typeNames.includes('water') && typeNames.includes('rock')) return 'water-rock-card';

//   //poison combo
//   else if (typeNames.includes('poison') && typeNames.includes('grass')) return 'poison-grass-card';
//   else if (typeNames.includes('poison') && typeNames.includes('ground')) return 'poison-ground-card';
//   else if (typeNames.includes('poison') && typeNames.includes('bug')) return 'poison-bug-card';
//   else if (typeNames.includes('poison') && typeNames.includes('flying')) return 'poison-flying-card';
//   else if (typeNames.includes('poison') && typeNames.includes('ghost')) return 'poison-ghost-card';


//   //electric combo
//   else if (typeNames.includes('electric') && typeNames.includes('steel')) return 'electric-steel-card';
//   else if (typeNames.includes('electric') && typeNames.includes('flying')) return 'electric-flying-card';


//   //grass combo
//   else if (typeNames.includes('grass') && typeNames.includes('flying')) return 'grass-flying-card';
//   else if (typeNames.includes('grass') && typeNames.includes('bug')) return 'grass-bug-card';
//   else if (typeNames.includes('grass') && typeNames.includes('psychic')) return 'grass-psychic-card';

//   //normal
//   else if (typeNames.includes('normal') && typeNames.includes('flying')) return 'normal-flying-card';
//   else if (typeNames.includes('normal') && typeNames.includes('psychic')) return 'normal-psychic-card';
//   else if (typeNames.includes('normal') && typeNames.includes('fairy')) return 'normal-fairy-card';

//   //flying
//   else if (typeNames.includes('flying') && typeNames.includes('fairy')) return 'flying-fairy-card';
//   else if (typeNames.includes('flying') && typeNames.includes('bug')) return 'flying-bug-card';
//   else if (typeNames.includes('flying') && typeNames.includes('rock')) return 'flying-rock-card';
//   else if (typeNames.includes('flying') && typeNames.includes('dragon')) return 'flying-dragon-card';
//   else if (typeNames.includes('flying') && typeNames.includes('psychic')) return 'flying-psychic-card';
//   else if (typeNames.includes('flying') && typeNames.includes('dark')) return 'flying-dark-card';
//   else if (typeNames.includes('flying') && typeNames.includes('ice')) return 'flying-ice-card';
//   else if (typeNames.includes('flying') && typeNames.includes('ground')) return 'flying-ground-card';
//   else if (typeNames.includes('flying') && typeNames.includes('steel')) return 'flying-steel-card';

//   //ground
//   else if (typeNames.includes('ground') && typeNames.includes('ice')) return 'ground-ice-card';

//   //rock
//   else if (typeNames.includes('rock') && typeNames.includes('ground')) return 'rock-ground-card';
//   else if (typeNames.includes('rock') && typeNames.includes('dark')) return 'rock-dark-card';

//   //bug
//   else if (typeNames.includes('bug') && typeNames.includes('rock')) return 'bug-rock-card';
//   else if (typeNames.includes('bug') && typeNames.includes('steel')) return 'bug-steel-card';
//   else if (typeNames.includes('bug') && typeNames.includes('fighting')) return 'bug-fighting-card';

//   //psychic
//   else if (typeNames.includes('psychic') && typeNames.includes('ice')) return 'psychic-ice-card';
//   else if (typeNames.includes('psychic') && typeNames.includes('fairy')) return 'psychic-fairy-card';

//   //ice
//   else if (typeNames.includes('ice') && typeNames.includes('dark')) return 'ice-dark-card';

//   //individual types
//   else if (typeNames.includes('fire'))  return 'fire-card';
//   else if (typeNames.includes('water')) return 'water-card';
//   else if (typeNames.includes('electric')) return 'electric-card';
//   else if (typeNames.includes('poison')) return 'poison-card';
//   else if (typeNames.includes('grass')) return 'grass-card';
//   else if (typeNames.includes('normal')) return 'normal-card';
//   else if (typeNames.includes('fairy')) return 'fairy-card';
//   else if (typeNames.includes('ice')) return 'ice-card';
//   else if (typeNames.includes('ground')) return 'ground-card';
//   else if (typeNames.includes('dark')) return 'dark-card';
//   else if (typeNames.includes('rock')) return 'rock-card';
//   else if (typeNames.includes('flying')) return 'flying-card';
//   else if (typeNames.includes('psychic')) return 'psychic-card';
//   else if (typeNames.includes('fighting')) return 'fighting-card';
//   else if (typeNames.includes('dragon')) return 'dragon-card';
//   else if (typeNames.includes('bug')) return 'bug-card';
//   else if (typeNames.includes('ghost')) return 'ghost-card';
//   else if (typeNames.includes('steel')) return 'steel-card';

  //default case
//   else{
//     return 'card-content'; 
//   }
// };


