import React, { Component } from 'react'

export class AlertMessage extends Component {
    render() {
        return (
            <div>
                {this.props.alertErrorMesssage &&
                    <p style={{
                        color: '#C61F5E', fontSize: '40px', textAlign: 'center', fontFamily:" monospace"}}>
                        Please Enter correct city name ...!
                    </p>
                }
            </div>
        )
    }
}

export default AlertMessage