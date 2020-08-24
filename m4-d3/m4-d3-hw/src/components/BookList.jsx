import React, { Component } from 'react'
import AllBooks from '../book/allBooks.json'
import { Row, Container, InputGroup, FormControl } from 'react-bootstrap'
import SingleBook2 from './SingleBook2'
class BookList extends Component {
    state = {
        book: AllBooks.slice(0, 12)

    }
    searchQuery = (search) => {
        console.log(AllBooks)
        if (search) {
            let filteredBooks = AllBooks.filter((book) =>
                book.title.toLowerCase().includes(search.toLowerCase())
            )
            this.setState({ book: filteredBooks })
            {
                console.log(filteredBooks)
            }

        } else { this.setState({ book: AllBooks.slice(0, 12) }) }

    }
    render() {


        return (
            <Container>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Type to find</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => this.searchQuery(e.target.value)}

                    />
                </InputGroup>
                <Row className="justify-content-center" xs={4}>
                    {
                        this.state.book.map((allBooks, index) => {

                            return (

                                < SingleBook2 key={index} image={allBooks.img} title={allBooks.title} price={allBooks.prices} />

                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}
export default BookList