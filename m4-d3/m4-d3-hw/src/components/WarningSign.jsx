import React from 'react'
import { Alert, Button, Badge, Row } from 'react-bootstrap'
import MyBadge from './MyBadge'
function WarningSign(props) {
    return (
        <div>
            <Alert variant="danger">
                <Row className="justify-content-center"> {props.text}
                    <MyBadge textBadge="Warning" /></Row>

            </Alert>
        </div>
    )
}
export default WarningSign