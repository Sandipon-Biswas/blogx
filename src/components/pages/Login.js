import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from '../smallFile/Logo';

const Login = () => {
    const [toggle, settoggle] = useState(true);
    let navigate = useNavigate();
    const handelelogin = (params) => {
        navigate("/dashboard", { replace: true });
    };
    return (
        <div className="container"  >
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                <div style={{minHeight:"100vh"}} className="inner-log-in d-flex justify-content-center align-items-center ">
                    <div className="bg-dark p-4 text-light">
                        <div className="text-center"> <Logo/> </div>
                        {
                            toggle?
                            <Form className="" >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                            
                                </Form.Text>
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button onClick={handelelogin} className=" w-100 " variant="primary" type="submit">
                                login
                            </Button>
                        </Form>:
                        // sign up
                        <Form className="" >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button className=" w-100 " variant="primary" type="submit">
                           SignUp
                        </Button>
                    </Form>
                        }
                    <div className="mt-4">
                    {
                        toggle? <p>Don't have an any account <span><a className="text-decoration-none" onClick={()=> settoggle(prev => !prev)} href="#"> singup</a></span> </p>:<p>Allrady have an any account <span><a className="text-decoration-none" onClick={()=>settoggle(prev=>!prev)}  href="#"> login</a></span> </p>
                    }
                    </div>
                    </div>
            </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default Login
