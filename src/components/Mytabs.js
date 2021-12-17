import React from 'react'
import {Tab, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mycard from './Mycard';
import MyXtercards from './MyXtercards';

const Mytabs = () =>{
    return (
        <Tab.Container id="" defaultActiveKey="first">
            <Nav variant="pills" className="mb-2">
                <Nav.Item>
                    <Nav.Link eventKey="first" className=" text-dark px-3 small">PLANETS</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second" className="text-dark px-3 small" >CHARACTERS</Nav.Link>
                </Nav.Item>
            </Nav>
                
            <Tab.Content className="mb-2">

                <Tab.Pane eventKey="first">
                    <Mycard />
                    
                </Tab.Pane>
                
                <Tab.Pane eventKey="second" className="position-relative">
                    <MyXtercards />
                </Tab.Pane>
            </Tab.Content> 



            </Tab.Container>
    )
}

export default Mytabs
