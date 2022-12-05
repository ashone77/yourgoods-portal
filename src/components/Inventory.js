import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Inventory extends Component {
  render() {
    return (
        <><div className='inventory-nav'>
            <Navbar id='navbar'>
                <Container>
                    <Navbar.Brand id='navtitle' href="/">yourGoods</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#deets">Manage Inventory</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Manage Retailers
                        </Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </div><Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row></>
   );
 }
 
    
  }

