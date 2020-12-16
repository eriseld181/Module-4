import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import items from "../data/menu.json"
import DishComments from "./DishComments"
import Reservations from "./Reservations"
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Welcome to Strive Restaurant",
            description: "The best dishies you can find it here",
            selectedDish: null,
        }

    }
    selectNewDish = (dish) => {
        this.setState({ selectedDish: dish })
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <h3>{this.state.title}</h3>
                        <p>{this.state.description}</p>
                        <hr />
                        <Carousel>
                            {items.map((dish) => {
                                return (
                                    <Carousel.Item key={dish.id}>
                                        <img
                                            className="d-block w-100"
                                            src={dish.image}
                                            alt={dish.name}
                                            onClick={() => { this.selectNewDish(dish) }}
                                        />
                                        <Carousel.Caption>
                                            <h3>{dish.name}</h3>
                                            <p>{dish.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </Col>
                </Row>
                <Row >
                    <Col xs={12} >
                        <DishComments selectedDish={this.state.selectedDish} />
                    </Col>
                </Row>
                <Row >
                    <Col xs={12} >
                        <Reservations />
                    </Col>
                </Row>

            </Container>
        )
    }
}
export default Home
