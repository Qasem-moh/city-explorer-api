
import React, { Component } from 'react'
import axios from 'axios'
import AlertMessage from './AlertMessage'
import { Form, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export class GetDataFromUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: false,
            displayName: '',
            lat: '',
            lon: '',
            alertErrorMesssage: false
        }
    }
    gitCityName = (e) => {
        this.setState({
            displayName: e.target.value,
        })
    }

    handelSubmit = async (e) => {
        e.preventDefault()
        try {
            let axiosData = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.3cf913088667d99eedcfd99de144aee7&q=${this.state.displayName}&format=json`)
            this.setState({
                displayName: axiosData.data[0].display_name,
                lon: axiosData.data[0].lon,
                lat: axiosData.data[0].lat,
                display: true,
                alertErrorMesssage: false

            })
        }
        catch {
            this.setState({
                alertErrorMesssage: true
            })
        }
    }

    render() {
        return (
            <div style={{ margin: 'auto' }} >

                <AlertMessage alertErrorMesssage={this.state.alertErrorMesssage} />
                <Form onSubmit={this.handelSubmit} style={{ margin: 'auto', width: '30%', marginTop: '10px' }}>
                    <Form.Group >
                        <Form.Control size="lg" type="text" placeholder='type city name ...' onChange={(e) => { this.gitCityName(e) }} />
                        <br />

                        <Form.Control style={{ background: 'Beige' }} type="submit" value='Explore!' />
                    </Form.Group>
                </Form>
                <div style={{ textAlign: 'center', marginTop: '50px', color: '#E1DF26', fontFamily: 'cursive', fontStyle: "bold" }} >


                    <h4>{this.state.displayName}</h4>
                    <h4>{this.state.lon}</h4>
                    <h4>{this.state.lat}</h4>
                    {this.state.display && <div>
                        <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.72479576e80a134c898131754a3ccdee&q&center=${this.state.lat},${this.state.lon}&zoom=10`} rounded="true" />
                    </div>}
                </div>


            </div>
        )
    }
}
export default GetDataFromUser