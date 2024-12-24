import React from 'react'
import { Card } from 'react-bootstrap'

function Image({ src, alt }) {
  return <Card.Img src={src} alt={alt} style={{ height: '150px' }} />
}

export default Image
