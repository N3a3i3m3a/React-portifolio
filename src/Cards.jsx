import React from 'react'

const Cards = ({icon,heading,paragraphs}) => {
  return (
    <div>
        <div>{icon}</div>
        <div>{heading}</div>
        <div>{paragraphs}</div>
    </div>
  )
}

export default Cards