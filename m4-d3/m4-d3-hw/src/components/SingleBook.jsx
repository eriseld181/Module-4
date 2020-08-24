import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap"
import book from '../book/singleBook.json'
export default class SingleBook extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '22rem' }} className="mb-5" >
                    {book.map((singleBook, index) => {
                        return (
                            <div key={index}>
                                <Card.Img variant="top" src={singleBook.img} />
                                <Card.Body>
                                    <Card.Title>{singleBook.title}</Card.Title>
                                    <Card.Text>
                                        ${singleBook.price}
                                    </Card.Text>
                                    <Button variant="success">Buy now</Button>
                                </Card.Body>
                            </div>
                        )
                    })}
                </Card>
            </div>
        )
    }
}
