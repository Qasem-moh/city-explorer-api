import React from 'react';
import { Form, Button } from 'react-bootstrap';
class GettingData extends React.Component{
render(){
    return(
        <Form onSubmit={this.getData}>
            <Form.Group className="mb-3" controlId="formBasicEmail" 	 >
                <Form.Label>City Name</Form.Label>
                <Form.Control type="text" placeholder="Enter City Name" onChange={this.GetCityName} size={'sm'} />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Explore!
            </Button>
        </Form>
    )
}
}


export default GettingData