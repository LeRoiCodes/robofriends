import React from 'react'
// import {robots} from './robots'
import Card from './Card'
 

function CardList({robots}) {
  return (
    <div className=''>
    {robots.map((robot) => {
      return( 
        <Card key={robot.id} name={robot.name} email={robot.email} id={robot.id} />
      )
    })}
    </div>
  )
}

export default CardList