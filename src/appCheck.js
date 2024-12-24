import React from 'react'
import './App.css'

import { Container, Card } from 'react-bootstrap'
import product from './product'
import Name from './name'
import Price from './price'
import Description from './description'
import Image from './image'

const firstName = "imen"

function App() {
  return (
    <Container>
      <Card style={{ width: '18rem'}}>
        <Image src={product.image} alt={product.name} />
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>

      <div className="text-center ">
        <h4>
          Bonjour {firstName ? `, ${firstName}` : ' !'}
        </h4>
        {firstName && (
          <img
            src="soura.png"
            alt="profile"
          />
        )}
      </div>
    </Container>
  )}

export default App
