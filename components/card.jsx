
import Image from 'next/image'
import React from 'react'

const Card = ({Title,Actors,Director,Images,Writer,Year}) => {

  

  return (
    <div>
      <h2>{Title}</h2>
      <Image src={Images[0]} alt="dfg" width={100} height={100} />
      <h2>{Actors}</h2>
      <h2>{Director}</h2>
      <h2>{Year}</h2>
      <h2>{Writer}</h2>
      
    </div>
  )
}

export default Card