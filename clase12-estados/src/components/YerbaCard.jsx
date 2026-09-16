import React from 'react'
import {Card,Button,Col} from 'react-bootstrap'

const YerbaCard = ({id,marca,descripcion,nombre,imagen,tamaño}) => {




  return (
    <Col md={4} lg={4}>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} style={{height:'300px',width:'300px'}}/>
      <Card.Body>
        <Card.Title>Marca: {marca}</Card.Title>
        <Card.Text>
          descripcion: {descripcion}
        </Card.Text>
        <Card.Text>
          tamaño: {tamaño}
        </Card.Text>
        <Button variant="primary">ver mas</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default YerbaCard