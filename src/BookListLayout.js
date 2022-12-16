import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BookListLayout = () => {
  return (
    <div>BookListLayout
        
          <Link to="/books/1">Book 1</Link>
          <Link to="/books/2">Book 2</Link>
          <Link to="/books/3">Book 3</Link>
          <Outlet context={{license:"624662KS"}}></Outlet>
    </div>
    
  )
}

export default BookListLayout