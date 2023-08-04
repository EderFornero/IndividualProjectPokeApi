import React from 'react'

function Card({poke}) {
  const {name} = poke; 
  return (
    <h2>
      {name}
    </h2>
  )
}

export default Card; 
