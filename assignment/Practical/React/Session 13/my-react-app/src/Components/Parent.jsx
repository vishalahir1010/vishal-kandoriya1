import React, { Children } from 'react'
import Child from './child'

export default function Parent() {
  return (
    <div>
      <h1>This is parent</h1>
      <Child name={"xyz"} age={25}/>
    </div>
  )
}
