import React, { Component } from 'react'
import { Tab, Tabs, Container, Card, Button, Row } from 'react-bootstrap'
const AllBooks = {
    fantasy: require("../books/fantasy.json"),
    history: require("../books/history.json"),
    horror: require("../books/horror.json"),
    romance: require("../books/romance.json"),
    scifi: require("../books/scifi.json")
}
export default class body extends Component {
    render() {
        return (
            <Container >
                <Tabs defaultActiveKey="fantasy" id="uncontrolled-tab-example" className="justify-content-center">
                    <Tab eventKey="fantasy" title="Fantasy" style={{ color: "white" }}>
                        <Row className="justify-content-left " >
                            {AllBooks.fantasy.map(books => {
                                return (<Card style={{ width: "250px" }} className="ml-4 mb-2 mt-4 mb-5 mr-1" >
                                    <Card.Img variant="top" src={books.img} style={{ height: "350px" }} />
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: "15px", height: "80px" }}>{books.title}</Card.Title>
                                        {/* <Card.Text style={{ color: "#007BFF" }}>
                                            ${books.price}
                                        </Card.Text> */}
                                        <Button variant="primary" >Buy now</Button>
                                    </Card.Body>
                                </Card>)
                            })}
                        </Row>
                    </Tab>
                    <Tab eventKey="history" title="History" style={{ color: "white" }}>
                        <Row className="justify-content-left ">
                            {AllBooks.history.map(books => {
                                return (<Card style={{ width: "250px" }} className="ml-4 mb-2 mt-4 mb-5" >
                                    <Card.Img variant="top" src={books.img} style={{ height: "350px" }} />
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: "15px", height: "80px" }}>{books.title}</Card.Title>
                                        {/* <Card.Text style={{ color: "#007BFF" }}>
                                            ${books.price}
                                        </Card.Text> */}
                                        <Button variant="primary" >Buy now</Button>
                                    </Card.Body>
                                </Card>)
                            })}

                        </Row>
                    </Tab>
                    <Tab eventKey="horror" title="Horror" style={{ color: "white" }}>
                        <Row className="justify-content-left ">
                            {AllBooks.horror.map(books => {
                                return (<Card style={{ width: "250px" }} className="ml-4 mb-2 mt-4 mb-5" >
                                    <Card.Img variant="top" src={books.img} style={{ height: "350px" }} />
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: "15px", height: "80px" }}>{books.title}</Card.Title>
                                        {/* <Card.Text style={{ color: "#007BFF" }}>
                                            ${books.price}
                                        </Card.Text> */}
                                        <Button variant="primary" >Buy now</Button>
                                    </Card.Body>
                                </Card>)
                            })}
                        </Row>
                    </Tab>
                    <Tab eventKey="romance" title="Romance" style={{ color: "white" }}>
                        <Row className="justify-content-left ">
                            {AllBooks.romance.map(books => {
                                return (<Card style={{ width: "250px" }} className="ml-4 mb-2 mt-4 mb-5" >
                                    <Card.Img variant="top" src={books.img} style={{ height: "350px" }} />
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: "15px", height: "80px" }}>{books.title}</Card.Title>
                                        {/* <Card.Text style={{ color: "#007BFF" }}>
                                            ${books.price}
                                        </Card.Text> */}
                                        <Button variant="primary" >Buy now</Button>
                                    </Card.Body>
                                </Card>)
                            })}
                        </Row>
                    </Tab>
                    <Tab eventKey="scifi" title="Scifi" style={{ color: "white" }}>
                        <Row className="justify-content-left ">
                            {AllBooks.scifi.map(books => {
                                return (<Card style={{ width: "250px" }} className="ml-4 mb-2 mt-4 mb-5" >
                                    <Card.Img variant="top" src={books.img} style={{ height: "350px" }} />
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: "15px", height: "80px" }}>{books.title}</Card.Title>
                                        {/* <Card.Text style={{ color: "#007BFF" }}>
                                            ${books.price}
                                        </Card.Text> */}
                                        <Button variant="primary" >Buy now</Button>
                                    </Card.Body>
                                </Card>)
                            })}
                        </Row>
                    </Tab>


                </Tabs>
            </Container>
        )
    }
}
