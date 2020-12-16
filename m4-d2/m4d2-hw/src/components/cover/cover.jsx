import React, { Component } from 'react'
import { Carousel, Container } from 'react-bootstrap'
import coverImg from "./cover.json"
export default class cover extends Component {
    render() {
        return (
            <Container id="haha">
                <Carousel>
                    {
                        coverImg.map(images => {
                            return (
                                <Carousel.Item>
                                    <img style={{ height: "600px", width: "auto", marginTop: "57px" }}
                                        className="d-block "
                                        src={images.coverImg}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                    }

                </Carousel>
            </Container>
        )
    }
}
