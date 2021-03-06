import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form} from 'react-bootstrap';
import {  useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'

function Cardplus() {
        const [show, setShow] = useState(false);
        const [error, setError] = useState(false);
        const handleClose = () => {
            setError(false)
            setShow(false)
        };
        const handleShow = () => setShow(true);
    
        const [planetValues, setPlanetValues] = useState({
            imageURL: '',
            name: '',
            info: ''
        });
    
        const updatePlanetValues =(e, key) => {
            setPlanetValues({
                ...planetValues, [key]: e.target.value
            })
            console.log(planetValues)
        }
    
        const handleSubmit = (planetValues) => {
            if(planetValues.imageURL=="" || planetValues.info=="" || planetValues.name=="") {
                setError(true)
            } else {
                setPlanetValues({
                    imageURL: '',
                    name: '',
                    info:''
                })
                handleClose()
            }
        }
    
    return (
        <div>
                <FaPlusCircle 
                    onClick={handleShow}
                    size={48}
                    className="position-absolute bottom-0 end-0"
                />
    
                <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="bold">Planets</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="small">Name</Form.Label>
                                <Form.Control type="text" size="lg" className=" name-input bg-light " value={planetValues.name} onChange={(e) => updatePlanetValues(e, "name")} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="small" placeholder="e.g. PI-NOE-01">Code</Form.Label>
                                <Form.Control type="text" size="lg" className=" name-input bg-light " value={planetValues.name} onChange={(e) => updatePlanetValues(e, "code")} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="small">Images</Form.Label>
                                <Form.Control type="text" size="lg" className="bg-light image-input" value={planetValues.imageURL} onChange={(e) => updatePlanetValues(e, "imageURL")} />
                                <Form.Text className="text-muted small fw-normal">
                                    Paste the URL of a JPG or PNG of max 20 kb
                                </Form.Text>
                            </Form.Group>


                            <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="small">Description</Form.Label>
                                <Form.Control as="textarea" className="description-input bg-light " value={planetValues.info} onChange={(e) => updatePlanetValues(e, "info")} rows={3} />
                            </Form.Group>
                            <p className="errorMessage"></p>

                            {error && <Form.Text className="text-danger fs-5" id="error">
                                Bummer! We can???t create this planet right now. Probably a black hole in the way. Try later please.
                            </Form.Text>}
                        </Form>

                    </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" size="lg" onClick={handleClose}>CANCEL</Button>
                    <Button variant="" className="btn-1 btn-secondary text-white" size="lg" onClick={() => handleSubmit(planetValues)}>CREATE PLANET</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Cardplus
