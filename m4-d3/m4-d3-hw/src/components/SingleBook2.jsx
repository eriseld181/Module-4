import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap"

export default class SingleBook extends Component {
    render() {
        { console.log("hahahahaha", this.props.image) }
        return (
            <>

                <Card style={{ width: '18rem' }} className='ml-3 mb-3'>
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </>

        )
    }
}
