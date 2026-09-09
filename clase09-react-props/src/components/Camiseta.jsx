import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Camiseta = (props) => {
    return (
        <div>
            <h1>{props.saludo}</h1>
            <ul>
                {
                    props.camisetas.map((camiseta) => {
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={camiseta.imagen} />
                            <Card.Body>
                                <Card.Title>{camiseta.talle}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    }

                    )}
            </ul>
        </div>
    )
}

export default Camiseta