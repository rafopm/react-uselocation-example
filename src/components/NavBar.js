import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className=''>
      <div className=''>
        <Link to="/home">
          <button>Home</button>
        </Link>

      </div>
      <div className=''>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </div>
  )
}
