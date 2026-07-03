import React from 'react'

export default function Child(props) {
  return (
    <div>
      <h1>i am child </h1>
      <div>
        <h3>
            name:{props.name}
        </h3>
        <h3>age:{props.age}</h3>
      </div>
    </div>
  )
}
