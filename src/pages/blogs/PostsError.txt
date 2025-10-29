import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const CareersError = () => {
  
    const error = useRouteError()
  
    return (
    <div>
      <h2>
        Error
      </h2>
        <p>{error.message}</p>
        
        <p>Back to <Link to='/'>Homepage</Link></p> 
        
    </div>
  )
}

export default CareersError
