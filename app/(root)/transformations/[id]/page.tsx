import React from 'react'

// this is the route for GET request
// we will get access to id by getting params and then accessing the id 
const TransformationsPage = () => {
  return (
    <div>TransformationsPage</div>
  )
}

export default TransformationsPage

// it won't happend on localhost:3000/transformation
// rather it will have like this localhost:3000/transformation/[id]