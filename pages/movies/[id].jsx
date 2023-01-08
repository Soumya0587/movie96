import Image from "next/image";
import React from "react";
import axios from 'axios'
import { useRouter } from 'next/router';
const Singlecard = ({data}) => {
    const router= useRouter()
    const senddata = async(obj)=>{
        axios.post(`http://localhost:8080/wishlist`,obj)
        .then(res=>{
            alert("success")
            router.push("/wishlists")

    })
        .catch(err=>alert(err))
      }
    
  return <div>
    <h1>{data.Title}</h1>
    <Image src={data.Images[0]} alt="dfg" width={100} height={100} />
    <button onClick={()=>senddata(data)}>add to wishlist</button>
  </div>;
};
export async function getStaticPaths() {
  let data = await fetch(`http://localhost:8080/movies`);
  let response = await data.json();
  return {
    paths: response.map((blog) => ({ params: { id: String(blog.id) } })),
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context){
    // console.log(context)
    const {id}=context.params
    const res = await fetch(`http://localhost:8080/movies/${id}`);
    const data = await res.json();
    return{
        props:{
            data : data
        }
    }
}
export default Singlecard;