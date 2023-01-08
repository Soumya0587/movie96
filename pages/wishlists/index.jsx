import axios from 'axios';
import Image from 'next/image';

import { useRouter } from 'next/router';
import React from 'react'

const Watchlist = ({data}) => {
    console.log(data)
  const router = useRouter()
  const refreshdata = ()=>{
    router.replace(router.asPath)
  }

    const handleRemove = async(id)=>{
        await axios.delete(`http://localhost:8080/wishlist/${id}`)
        .then((res)=>{
            alert("done")
            refreshdata()
        })
        .catch((err)=>{
            alert(err)
        })
    }
  return (
    <div>
        <h1>watchlist</h1>
        {data.map((el)=>{
          return <div key={el.id}>
                <Image src={el.Images[0]} alt="dfg" width={100} height={100} />
                <h1>{el.Title}</h1>
                <button onClick={()=>handleRemove(el.id)}>delete</button>
            </div>
        })}
    </div>
  )
}
export async function getStaticProps() {
    const res = await fetch("http://localhost:8080/wishlist/");
    const data = await res.json();
  
    return {
      props: {
        data: data,
      },
    };
  }

export default Watchlist