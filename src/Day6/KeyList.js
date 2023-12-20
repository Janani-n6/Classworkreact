import React from 'react'

export default function KeyList() {
    const name=["jan","avan","jaan"]
    const result=name.map((na,index)=><li key={index}> {index} {na}</li>)
  return (
    <div>
       <ul>
        {result}
       </ul>
    </div>
  )
}