import React, { Component } from 'react'
import allBooks from '../book/allBooks.json'
import { Card, Button, Row, Container } from 'react-bootstrap'
import SingleBook2 from './SingleBook2'
class BookList extends Component {
    state = {
        book: allBooks.slice(0, 12)

    }
    render() {


        return (
            <Container>
                <Row className="justify-content-center" xs={4}>
                    {
                        this.state.book.map(allBooks => {
                            { console.log(allBooks.img) }
                            return (

                                < SingleBook2 image={allBooks.img} title={allBooks.title} price={allBooks.prices} />

                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}
export default BookList