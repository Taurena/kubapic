import React from 'react';
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className="mx-auto position-absolute top-50 start-50">
    <Spinner animation="border" variant="success"/>
    </div>
  )
}

export default Loading