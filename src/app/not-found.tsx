import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='grid grid-cols-1 place-items-center h-screen'>
        <div className="text-center space-y-4">
            <h1 className="text-3xl">Not Found</h1>
            <p>Could not find requested resource 🤨</p>
            <Link href={'/blog'} className='inline-flex items-center px-3 py-2 text-sm font-medium text-center'>
                All posts
            </Link>
        </div>
    </div>
  )
}

export default NotFound