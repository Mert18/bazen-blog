import Link from 'next/link'
import React from 'react'

const AppTitle = () => {
  return (
    <Link href="/" className='text-xl font-bold text-accent hover:underline'>
      <p className='my-2'>bazen.blog</p>
    </Link>
  )
}

export default AppTitle