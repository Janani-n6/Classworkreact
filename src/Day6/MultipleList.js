import React from 'react'

export default function MultipleList() {
    const college=[{id:1,stuName:"sachin",age:24},{id:2,stuName:"surya",age:25},{id:1,stuName:"Pavan",age:26},]
    const result=college.map((col)=><li key={col.id}>{col.stuName} {col.age}</li>)
  return (
    <div>
    {result}
    </div>
  )
}
