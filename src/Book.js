import React from 'react'
import { useParams } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'

const Book = () => {
  const {id} = useParams()
  const outletContext = useOutletContext()
  return (
    <div>Book title {id} with license {outletContext.license}
    
    </div>
  )
}

export default Book