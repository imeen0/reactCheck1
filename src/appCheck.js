import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card } from 'react-bootstrap'
import product from './product'
import Name from './Name'
import Price from './Price'
import Description from './Description'
import Image from './Image'

const firstName = "skou"

function App() {
  return (
    <Container className="mt-5">
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
            style={{ borderRadius: '50%', marginTop: '10px' }}
          />
        )}
      </div>
    </Container>
  )}

export default App
