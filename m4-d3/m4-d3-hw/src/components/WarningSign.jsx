import React from 'react'
import { Alert, Badge, Row } from 'react-bootstrap'
import MyBadge from './MyBadge'
function WarningSign(props) {
    return (
        <div>
            <Alert variant="success">
                <Row className="justify-content-center"> {props.text}
                    <MyBadge textBadge="Click here" /></Row>

            </Alert>
        </div>
    )
}
export default WarningSign