import React, { Component } from 'react'
import { Container, ListGroup, Alert, Badge } from 'react-bootstrap'

class DishComments extends Component {
    render() {
        return (
            <Container >
                {this.props.selectedDish &&
                    <ListGroup >
                        <h2 className="d-flex justify-content-left"> {this.props.selectedDish.name}</h2>

                        {this.props.selectedDish.comments.map((comment, index) => {
                            let variant = ""
                            switch (comment.rating) {
                                case 1:
                                    variant = "danger"
                                    break
                                case 2:
                                    variant = "warning"
                                    break
                                case 3:
                                    variant = "secondary"
                                    break
                                default:
                                    variant = "success"
                                    break
                            }
                            return (
                                <ListGroup.Item key={index} className="d-flex justify-content-left">
                                    {comment.author}: {comment.comment}
                                    <Badge pill variant={variant} className="ml-3 p-3">
                                        {comment.rating}
                                    </Badge>
                                </ListGroup.Item>)
                        })}
                    </ListGroup>}

                {!this.props.selectedDish && (<Alert variant="secondary" className="mt-5">
                    <h6>No Dish selected, please click on a dish to show comments.</h6>
                </Alert>)}
            </Container>
        )
    }
}
export default DishComments