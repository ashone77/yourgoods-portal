import React, { useState, useEffect } from 'react';
import './tabledata.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

function TableData() {
    const [data, getData] = useState([])
    const URL = 'http://localhost:4000/owner/getallretailers';

   

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response);
            })

    }

    return (
        <>
        <div className='retailer-nav'>
            <Navbar id='navbar'>
                <Container>
                <Navbar.Brand id='navtitle' href="/">yourGoods</Navbar.Brand>
                <Nav>
            <Nav.Link href="./Inventory.js">Manage Inventory</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Manage Retailers
            </Nav.Link>
          </Nav>

                </Container>
            </Navbar>
            </div>
            <br />
            <div className='retailer-table'>
            <h1 className='ret-class'>Retailers</h1>
            <tbody>
                <tr>
                    <th>Retailer Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Pincode</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.retailerId}</td>
                        <td>{item.retailerName}</td>
                        <td>{item.retailerEmail}</td>
                        <td>{item.retailerPhone}</td>
                        <td>{item.retailerAddress}</td>
                        <td>{item.retailerPincode}</td>
                    </tr>
                ))}
            </tbody>
            </div>

    
        </>
    );
}

export default TableData;