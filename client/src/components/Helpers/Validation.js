const validation = (pokemon) => { 
  const errors = {}; 

  //validate name
  if(!pokemon.name || pokemon.name.trim() === ""){ 
    errors.name = "Must be a name";
  }else if(!/^[a-z]{1,20}$/.test(pokemon.name)){ 
    errors.name = "The name must contain only lowercase letters without spaces and have a maximum of 20 characters";
  }

  if(!pokemon.image){
    errors.image = "Image is required"; 
  }
  
  //validate health points
  if(!pokemon.health_points || isNaN(pokemon.health_points) || Number(pokemon.health_points <= 0)){ 
    errors.health_points = "Health points should be a positive number higher than 0"; 
  }  

  //validate attack
  if(!pokemon.attack || isNaN(pokemon.attack) || Number(pokemon.attack <= 0)){ 
    errors.attack = "Attack should be a positive number higher than 0"; 
  }

  //validate defense
  if(!pokemon.defense || isNaN(pokemon.defense) || Number(pokemon.defense <= 0)){ 
    errors.defense = "Defense should be a positive number higher than 0"; 
  }

  //validate speed if exist
  if((pokemon.speed && isNaN(pokemon.speed)) || Number(pokemon.speed < 0)){ 
    errors.speed = "Speed must be a positive number"; 
  }

  //validate height if exist
  if((pokemon.height && isNaN(pokemon.height)) || Number(pokemon.height < 0)){ 
    errors.height = "Height can be zero or a positive number"; 
  }

  //validate weight if exist
  if((pokemon.weight && isNaN(pokemon.weight)) || Number(pokemon.weight < 0)){ 
    errors.weight = "Weight can be zero or a positive number"; 
  }

  //validate types
  if(!pokemon.types || pokemon.types.length === 0){ 
    errors.types = "Pokemon should have at least one type";
  }

  return errors; 
}

export default validation; 