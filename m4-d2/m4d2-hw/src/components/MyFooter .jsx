import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
export default class MyFooter extends Component {
    render() {
        return (
            <>
                <Row className=" pb-2 pt-2  " style={{ backgroundColor: " #343A40", color: "white" }}>
                    <Col>
                        <Row id="hello">
                            <Col >
                                <Row className="justify-content-center "> <h5>Categories</h5></Row>
                                <Row className="justify-content-center                                                                                                  "> menu 1asdasdas</Row>
                                <Row className="justify-content-center"> menu 1</Row>


                            </Col>

                            <Col >
                                <Row className="justify-content-center "> <h5>Order Now</h5></Row>
                                <Row className="justify-content-center"> menu 1</Row>
                                <Row className="justify-content-center"> menu 1asdasdas</Row>
                                <Row className="justify-content-center"> menu 1</Row>
                            </Col>

                            <Col >
                                <Row className="justify-content-center "> <h5>Wanna donate</h5></Row>
                                <Row className="justify-content-center"> menu 1asdasd</Row>
                                <Row className="justify-content-center"> menu 1</Row>
                                <Row className="justify-content-center"> menu 1</Row>

                            </Col>

                        </Row>
                    </Col>
                </Row >
            </>
        )
    }
}
