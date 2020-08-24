import React, { Component } from 'react'
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col,
    Card,
    Dropdown,
    DropdownButton,
    InputGroup,
    FormControl
} from 'react-bootstrap'

let bookCategory = ["fantasy", "horror", "history", "romance", "scifi"]

let books = {
    fantasy: require('../data/fantasy.json'),
    horror: require('../data/horror.json'),
    history: require('../data/history.json'),
    romance: require('../data/romance.json'),
    scifi: require('../data/scifi.json')
}

class Home extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         book: books.fantasy.slice(0, 12),
    //         categorySelected: this.props.categoryTitle
    //     }

    // }


    state = {
        book: books.fantasy.slice(0, 12),
        categorySelected: "fantasy"
    }

    handleDropDownChange = (category) => {
        this.setState({ book: books[category].slice(0, 12), categorySelected: category })
    }

    handleSearchQuery = (searchQuery) => {
        if (searchQuery) {
            let FilteredBooks = books[this.state.categorySelected].filter(book =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase()))

            this.setState({ book: FilteredBooks.slice(0, 12) })
        }
        else { this.setState({ book: books[this.state.categorySelected].slice(0, 12) }) }
    }

    render() {
        console.log(books)
        return (
            <div>
                <Jumbotron>
                    <h1>{this.props.jumboTitle}</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
  </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>

                <Container>
                    <InputGroup>
                        <DropdownButton as={InputGroup.Prepend} id="dropdown-basic-button" title={this.state.categorySelected} className="mb-3">
                            {bookCategory.map((category, index) => {
                                return (<Dropdown.Item href="#/action-1" key={index} onClick={() => this.handleDropDownChange(category)}>
                                    {category}</Dropdown.Item>)
                            })}


                        </DropdownButton>
                        <FormControl
                            placeholder="Search books by title"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                            onChange={(e) => this.handleSearchQuery(e.target.value)}
                        />
                    </InputGroup>
                    <Row>
                        {this.state.book.map(book => {
                            return (<Col xs={4} key={`card-${book.asin}`}>
                                <Card className=" mb-4">
                                    <Card.Img variant="top" className="rounded mx-auto d-block" style={{ height: "350px", width: "250px", position: "center" }} src={book.img} />
                                    <Card.Body>
                                        <Card.Title style={{ height: "60px" }}>{book.title}</Card.Title>
                                        <Card.Text >
                                            <h4  > ${book.price}</h4>
                                        </Card.Text>
                                        <Button variant="primary">Order now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        })}

                    </Row>
                </Container>
            </div>
        )
    }
}
export default Home