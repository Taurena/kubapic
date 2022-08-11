import React from 'react';
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div className="mx-auto">
    <Spinner animation="border" variant="success"/>
    </div>
  )
}

export default Loading