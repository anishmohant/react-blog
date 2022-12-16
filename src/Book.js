import React from 'react'
import { useParams } from 'react-router-dom'

const Book = () => {
  const {id} = useParams()
  return (
    <div>Book title {id}</div>
  )
}

export default Book