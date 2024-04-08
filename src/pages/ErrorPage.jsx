import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='bg-blue-400 p-5 flex flex-col items-center'>
        <h1 className='uppercase text-4xl font-bold text-center my-9'>Error page...</h1>
        <Link className='bg-red-500 px-4 py-2' to="/">BACK TO HOME</Link>
    </div>
  )
}

export default ErrorPage