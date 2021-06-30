import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap'
import '../App.css'

// // import { Nav } from 'react-bootstrap'



class NavBar extends React.Component {
    render() {
        return (
            <>
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </>
        )
    }
}
export default NavBar;