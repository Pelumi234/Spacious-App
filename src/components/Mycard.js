import React from 'react'
import {  useState } from 'react';
import planet1 from '../planet1.svg';
import planet2 from '../planet2.svg';
import planet3 from '../planet3.svg';
import planet4 from '../planet4.svg';
import planet5 from '../planet5.svg';
import planet6 from '../planet6.svg';
import planet7 from '../planet7.svg';
import planet8 from '../planet8.svg';
import planet9 from '../planet9.svg';

import { Row, Col, Card, Offcanvas } from 'react-bootstrap';
import Sidebarplanet from './Sidebarplanet';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardplus from './Cardplus';

function Mycard({ name, ...props }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const planets = [
        {
            name: "Planet Alpha",
            image: planet1,
            id: 1,
            pops: "Pop: 235"
        },

        {
            name: "Planet Alpha",
            image: planet2,
            id: 2,
            pops: "Pop: 235"
        },

        {
            name: "Planet Alpha",
            image: planet3,
            id: 3,
            pops: "Pop: 235"
        },

        {
            name: "Planet Alpha",
            image: planet4,
            id: 4,
            pops: "Pop: 235"
        },

        {
            name: "Planet Alpha",
            image: planet5,
            id: 5,
            pops: "Pop: 235"
        },

        {
            name: "Planet Alpha",
            image: planet6,
            id: 6,
            pops: "Pop: 235"
        },

        {
            name: "Planet Alpha",
            image: planet7,
            id: 7,
            pops: "Pop: 235"
        },

        {
            name: "Planet Alpha",
            image: planet8,
            id: 8,
            pops: "Pop: 235"
        },

        {
            name: "Planet Alpha",
            image: planet9,
            id: 9,
            pops: "Pop: 235"
        },

    ]    
        

        return (
            <Row xs={1} md={3} lg={4} sm={1} className="d-flex justify-content-between position-relative">

            {
                planets.map( (planet)=> (
                    <Col xs="auto" md="auto" lg="3" sm="auto">
                    <a>
                        <Card className="card-new rounded my-3" key={planet.id}>
                            <a  href="#" className=" text-decoration-none" data-bs-toggle="offcanvas"  role="button" aria-controls="offcanvasExample" onClick={handleShow}>
                                <div className="planet-size mx-auto">
                                    <Card.Img variant="top" className="img-fluid" src={planet.image} /> 

                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold small ">{planet.name}</Card.Title>
                                    <Card.Text>
                                        <small className="text-muted fs-12">{planet.pops}</small>
                                    </Card.Text>
                                </Card.Body>
                            </a>
                                        
                        </Card>        
                        
                    </a>
                    
                </Col>
        
                
            ))
        }
        {

            <>
            <Cardplus className="position-absolute bottom-0 end-0 mt-5"/>
            <Offcanvas show={show} onHide={handleClose} {...props} placement="end" className="offcanvas-style" >
                <Offcanvas.Header closeButton className="">
                <Offcanvas.Title className="bigger">Planet Alpha</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <p className="little">Planet Alpha is the place to be if you like everything related to planets. I know it's a bit meta but come see by yourself. </p>
                    <Row className="mt-4">
                        <Col className=" ">
                            <p className="little mt-2 mb-2 pb-2">Population</p>
                            <p className="small mt-2 mb-2 pb-2">234</p>

                        </Col>
                        
                    </Row>
                    <p className="small text-muted mt-3">CHARACTERS</p>
                    {
                        <Row className="d-flex">
                            <Sidebarplanet/>

                        </Row>
                        
                    }
            

                </Offcanvas.Body>
                
            </Offcanvas>
            </>
        }   

    </Row>   
)
}
export default Mycard
