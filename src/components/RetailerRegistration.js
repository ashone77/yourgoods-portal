import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NotificationManager } from 'react-notifications';



export default function RetailerRegistration()
{
    // Rohan
    const [ownerEmail,setOwnerEmail] = useState('');
    const [ownerPassword, setOwnerPassword] = useState('');

    const [retailerName, setRetailerName] = useState('');
    const [retailerEmail, setRetailerEmail] = useState('');
    const [retailerPassword, setRetailerPassword] = useState('');
    const [retailerPhone, setRetailerPhone] = useState('');
    const [retailerAddress, setRetailerAddress] = useState('');
    const [retailerPincode, setretailerPincode] = useState('');

    
    const navigate = useNavigate();

    const setRetName = (e) => {
        setRetailerName(e.target.value);
    };
    const setRetEmail = (e) => {
        setRetailerEmail(e.target.value);
    };
    const setRetPass = (e) => {
        setRetailerPassword(e.target.value);
    };
    const setRetPhone = (e) => {
        setRetailerPhone(e.target.value);
    };
    const setRetAddress = (e) => {
        setRetailerAddress(e.target.value);
    };
    const setRetPin = (e) => {
        setretailerPincode(e.target.value);
    };



    async function validate(e) {
        e.preventDefault();
        const navigateRetailer = (e) =>
        {
            // 👇️ navigate to /
            navigate("/retailerlogin");
        };
        
        let data = {
            retailerName: (retailerName),
            retialerEmail: (retailerEmail),
            retailerPassword: (retailerPassword),
            retailerPhone: (retailerPhone),
            retailerAddress: (retailerAddress),
            retailerPincode: (retailerPincode)
        }
        console.log(data.retailerName,data.retailerEmail,data.retailerPhone,data.retailerAddress,data.retailerPincode);
        

        await axios.post('http://localhost:4001/api/retailer/',data)
        .then( response => {console.log(response.data);
            console.log("Restration Success!");
            NotificationManager.success('Logged In Sucessfully', 'Successful!', 2000);
            navigateRetailer(e);
        }).catch(function (error) {
            // handle error
            console.log(error);
          })
    };
    return (
        <div className='Container'>
            <Navbar id='navbar'>
                <Container>
                <Navbar.Brand id='navtitle' href="/">yourGoods</Navbar.Brand>
                
                </Container>
            </Navbar>
            <div>
            <div className='Auth-form-container'>
                <form className='Auth-form' onSubmit={e => validate(e)}>
                    <div className='Auth-form-content'>
                        <h3 className='Auth-form-title'>Retailer Sign Up</h3>
                        <div className='form-group mt-3'>
                            <input className='form-control mt-1 input' type="text" id="retailerName" placeholder='Retailer Name' onChange={(e) => setRetailerName(e) }/>
                        </div>
                        <div className='form-group mt-3'>
                            <input className='form-control mt-1 input' type="text" id="retailerEmail" placeholder='Email' onChange={(e) => setRetailerEmail(e) }/>
                        </div>
                        <div className='form-group mt-3'>
                            <input className='form-control mt-1 input' type="password" id="retailerPassword" autoComplete="on" placeholder='Password' onChange={(e) => setRetailerPassword(e) }/>
                        </div>
                        
                        <div className='form-group mt-3'>
                            <input className='form-control mt-1 input' type="text" id="retailerPhone" placeholder='Phone' onChange={(e) => setRetailerPhone(e) }/>
                        </div>
                        <div className='form-group mt-3'>
                            <input className='form-control mt-1 input' type="text" id="retailerAddress" placeholder='Address' onChange={(e) => setRetailerAddress(e) }/>
                        </div>
                        <div className='form-group mt-3'>
                            <input className='form-control mt-1 input' type="text" id="retailerPincode" placeholder='Pincode' onChange={(e) => setretailerPincode(e) }/>
                        </div>
                        <div className='d-grid gap-2 mt-3 justify-content-center align-content-center'>
                            <button  className='btn btn-primary ' id='btn' type="submit" >Submit</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}