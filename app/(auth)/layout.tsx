import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
    // layout always  have to export some children inside it
  return (
    <main className='auth'>
        {children}
    </main>
  )
}

export default Layout