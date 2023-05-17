import React from 'react'

function Card(props) {
  return (
    <div>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Card