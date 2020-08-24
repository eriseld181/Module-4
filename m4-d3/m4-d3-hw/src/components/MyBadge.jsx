import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'
class MyBadge extends Component {
    render() {
        return (
            <div>
                <Badge variant="danger" className="p-2 ml-3">{this.props.textBadge}</Badge>
            </div>
        )
    }
}
export default MyBadge