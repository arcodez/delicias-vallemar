import React from 'react'
import Navbar from './Navbar'
import Pie from './Pie'

function Layout({children}) {
    return (
        <>
          <Navbar /> 
            {children}
          <Pie />
        </>
    )
}

export default Layout
