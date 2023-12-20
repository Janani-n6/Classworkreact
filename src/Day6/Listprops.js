import React from 'react'
function DisplayName(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}

export default function Listprops() {
  const Student=["Jan","avan"]
  const StName=Student.map((stu)=><DisplayName name={stu}></DisplayName>)
  return (
    <div>
        {StName}
    </div>
  )
}
