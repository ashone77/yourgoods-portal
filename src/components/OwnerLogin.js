import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NotificationManager } from 'react-notifications';



export default function OwnerLogin()
{
    const [ownerEmail,setOwnerEmail] = useState('');
    const [ownerPassword, setOwnerPassword] = useState('');
    
    const navigate =useNavigate();
    const setOwEmail = (e) => {
        setOwnerEmail(e.target.value);
    };
    const setPass = (e) => {
        setOwnerPassword(e.target.value);
    };



    async function validate(e) {
        e.preventDefault();
        const navigateOwner = (e) =>
        {
            // 👇️ navigate to /
            navigate("/owner");
        };
        
        let data = {
        ownerEmail: (ownerEmail),
        ownerPassword: (ownerPassword)
        }
        console.log(data.ownerEmail,data.ownerPassword);
        

        await axios.post('http://localhost:4000/owner/signin',data)
        .then( response => {console.log(response.data);
        if (response.data==="valid"){
            console.log("Welcome !")
            NotificationManager.success('Logged In Sucessfully', 'Successful!', 2000);
            navigateOwner(e);
            
        }
        else if (response.data === "incorrect password")
        {
            NotificationManager.error('Incorrect Password!', 'Error!');
        }
        else if(response.data==="no account found"){
            NotificationManager.error('No Account Found!', 'Error!');
        }
        else{
            NotificationManager.error('Please Verify Credentials!', 'Error!');
        }
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
                        <h3 className='Auth-form-title'>Owner Login</h3>
                        
                        <div className='form-group mt-3'>
                            <input className='form-control mt-1 input' type="text" id="ownerEmail" placeholder='Owner Email' onChange={(e) => setOwEmail(e) }/>
                        </div>
                        <div className='form-group mt-3'>
                            <input className='form-control mt-1 input' type="password" id="ownerPassword" autoComplete="on" placeholder='Owner Password' onChange={(e) => setPass(e) }/>
                        </div>
                        <div className='d-grid gap-2 mt-3 justify-content-center align-content-center'>
                            <button  className='btn btn-primary ' id='btn' type="submit" >Login</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}