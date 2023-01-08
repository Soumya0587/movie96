import Link from 'next/link'
import React from 'react'
import Card from '../../components/card'

const Movies = ({movies}) => {
    console.log(movies)
  return (
    <div>
        <h1>Movies List</h1>
        {movies.map((el)=>(
            <Link key={el.id} href={`/movies/${el.id}`}>
            <Card key={el.id} {...el}/>
            </Link>
            
        ))}
    </div>
  )
}
export async function getStaticProps(){
    let data = await fetch(`http://localhost:8080/movies`)
    let response = await data.json()
    return{
        props:{
            movies : response
        }
    }
}
export default Movies