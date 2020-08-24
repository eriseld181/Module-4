import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap"

export default class SingleBook extends Component {
    render() {

        return (
            <>

                <Card style={{ width: '18rem' }} className='ml-3 mb-3'>
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.price}
                        </Card.Text>
                        <Button variant="success">Details</Button>
                    </Card.Body>
                </Card>
            </>

        )
    }
}
