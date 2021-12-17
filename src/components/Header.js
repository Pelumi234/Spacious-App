import React from 'react'
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Container m-5 mx-5>
                <Navbar expand="lg" variant="light" bg="white">
                    <Container>
                        <h1 className="fs-1 display-1">Spacious</h1>
                    </Container>
                </Navbar>
            </Container>
        </div>
    )
}

export default Header
