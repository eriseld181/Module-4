import React from 'react'
import { ListGroup } from 'react-bootstrap'

class Reservations extends React.Component {
    state = {
        reservations: []
    }

    componentDidMount = async () => {
        //this is used mostly for fetch-es, asyncronous functions...
        //component DidMount is only used in class method...
        console.log("component didMount is active")
        try {
            //at module 5-7 remove Diegos fetch and create your own
            let response = await fetch("https://striveschool.herokuapp.com/api/reservation")
            let reservations = await response.json()
            console.log("reservations are:", reservations)//check if we are receiving the fetch...
            //save the reservations in the state and we can access that information in the jsx
            this.setState({ reservations: reservations })
            //if you have same name from fetch and state you can keep only one
        } catch (error) {
            console.log("myFetchError:", error)
        }
    }
    render() {
        return (
            <div className='mt-2'>
                <ListGroup>
                    {this.state.reservations.length > 0 &&

                        this.state.reservations.map((reservation, i) => {
                            return (
                                <ListGroup.Item key={i}>
                                    From: {reservation.name}, for {reservation.numberOfPersons},
                                    at {reservation.dateTime}
                                </ListGroup.Item>
                            )
                        })
                    }

                </ListGroup>
                {/* if there is nothing in the state, show the div with the message */}
                {this.state.reservations.length === 0 &&
                    (<div>There are no Reservations for your restaurant...</div>)}
            </div>
        )
    }
}
export default Reservations