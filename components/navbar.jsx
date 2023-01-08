import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link href="/movies">Movies</Link>
        <Link href="/wishlists">Wishlists</Link>
    </div>
  )
}

export default Navbar