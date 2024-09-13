import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import "../assets/home.css";

function Home() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    axios.defaults.withCredentials = true;

    const handleLogout = () => {
        axios.get('http://localhost:5001/logout')
            .then(res => {
                location.reload();

                ;
            }).catch(err => console.log(err));
    }


    useEffect(() => {
        axios.get('http://localhost:5001/')
            .then(res => {
                console.log(res.data)
                if (res.data.Status === "Success") {
                    setAuth(true);
                    setName(res.data.name + " " + res.data.last_name);
                    // navigate('/login');
                    // setTimeout(() => {
                    // },1000)
                } else {
                    setAuth(false);
                    setMessage(res.data.Error);
                }
            })
            .then(err => console.log(err));
    }, [])
    return (
        <div className='w-100'>
            {
                auth ?
                    <div className='w-100'>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                            <div className="container-fluid">
                                <div className="w-1 h-100  navbar-brand">
                                    <Link to="/" className="navbar-brand w-100"></Link>
                                    {/* <a className="navbar-brand w-100" href="#"></a> */}
                                </div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ms-md-auto gap-2">

                                        <li className='text-center m-auto'>{name}</li>

                                        <li className="nav-item dropdown rounded">
                                           
                                            <a className="nav-link dropdown-toggle rounded-circle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 
                                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width="30" height="30" className="rounded-circle" />
                                                <i className="bi bi-person-fill me-2"></i>
                                                
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                                <li>
                                                 <Link to="/" className="dropdown-item">  Account </Link> </li>
                                                <li><hr/></li>
                                                <li>

                                                    <button className="btn btn-primary w-100" onClick={handleLogout}>Logout</button>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        

                        {/* <h3>You are logged in as {name}</h3>
                    <button className="btn btn primary" onClick={handleLogout}>Logout</button> */}
                        {/* <Profile/> */}
                    </div>
                    :
                    <div>
                        <h3>Loin now {message}</h3>
                        <Link to="/login" className="btn btn primary">Login</Link>
                        {/* <Login/> */}
                    </div>
            }
        </div>
    )
}

export default Home
