import React from 'react';
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <>
    <Spinner animation="border" variant="secondary"  className="position-absolute top-50 start-50"/>
    </>
  )
}

export default Loading