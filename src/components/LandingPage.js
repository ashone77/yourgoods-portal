import React, { Component } from 'react'
import {Container, Navbar} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import {Carousel} from 'react-bootstrap'
import './LandingPage.css'

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div className='Container'>
            <Navbar id='navbar' >
                <Container>
                    <Navbar.Brand id='navtitle' href="/">yourGoods</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/RetailerLogin" id='navlink'>Retailer</Nav.Link>
                        <Nav.Link href="/OwnerLogin" id='navlink'>Inventory-Associate</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        <div className='test-container'>
                
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://beast-of-traal.s3.ap-south-1.amazonaws.com/2021/03/tws-banner-multi.png"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://economictimes.indiatimes.com/thumb/height-342,width-785,imgsize-86242,msid-74777715/why-you-need-a-smart-business-laptop-to-excel-at-work.jpg?from=mdr"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://marketingweek.imgix.net/content/uploads/2017/03/30100525/Screen-Shot-2017-03-30-at-10.03.59-copy.jpg?auto=compress,format&q=60&w=785&h=342"
          alt="Second slide"
        />
      
      </Carousel.Item>
      
      </Carousel>
                <br/>
                <br/>
                <br/>
                
                <div className='text-center'>
                <h6 className="red-text">LAPTOP-MOBILES-TABLETS-EARPHONES</h6>
                <p className="white-text">your friendly inventory management portal for all electronic retailers</p>
                
                </div>
               
      
                
            </div>  </div> 
       
      
        
        </>
    )
  }
}
