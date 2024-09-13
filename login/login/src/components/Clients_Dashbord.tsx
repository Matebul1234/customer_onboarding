import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';
import "../assets/home.css";

import { Dialog } from 'primereact/dialog';
import Website_form from './Website_form';

function ClientDashboard() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    axios.defaults.withCredentials = true;


    var show: boolean = false;
    const [visible, setVisible] = useState(false);

    const onpeform = (e: any) => {
        if (e.target.value === "Website Development & Maintenance") {
            show = true;
        }

    }

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
                        <div className="d-flex flex-row flex-lg-row h-lg-full bg-surface-secondary">

                            <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
                                <div className="container-fluid">

                                    <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="avatar-parent-child " >
                                            <img alt="Image Placeholder" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className='rounded-circle' style={{ width: '40px', height: '40px', marginLeft: '10px' }} />
                                            <span className="avatar-child avatar-badge ml-1"> Matty</span>
                                        </div>
                                    </a>

                                    <hr />

                                    <div className="navbar-user d-lg-none">

                                        <div className="dropdown">

                                            <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <div className="avatar-parent-child">
                                                    <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle" />
                                                    <span className="avatar-child avatar-badge bg-success"></span>
                                                </div>
                                            </a>

                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                                                <a href="#" className="dropdown-item">Profile</a>
                                                <a href="#" className="dropdown-item">Settings</a>
                                                <a href="#" className="dropdown-item">Billing</a>
                                                <hr className="dropdown-divider" />
                                                <a href="#" className="dropdown-item">Logout</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="collapse navbar-collapse" id="sidebarCollapse">

                                        <ul className="navbar-nav">
                                            <li className="nav-item active text-bold ml-2" onClick={() => { setVisible(true) }}>


                                                Website Development


                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link text-bold active " >
                                                    {/* <i className="bi bi-bar-chart"></i> Analitycs */}
                                                    Social Media
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link text-bold bold" href="#">
                                                    {/* <i className="bi bi-bookmarks"></i> Collections */}
                                                    Data Visualization
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-bold" href="#">
                                                    {/* <i className="bi bi-people"></i> Users
             */}
                                                    Paid Marketing(ppc )
                                                </a>
                                            </li>
                                        </ul>

                                        <hr className="navbar-divider my-5 opacity-20" />


                                        <div className="mt-auto"></div>

                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    <i className="bi bi-person-square"></i> Account
                                                </a>
                                            </li>
                                            <li className="nav-item" onClick={handleLogout}>
                                                <a className="nav-link" >
                                                    <i className="bi bi-box-arrow-left"></i> Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>

                            <div className="h-screen flex-grow-1 overflow-y-lg-auto">

                                <header className="bg-surface-primary border-bottom ">
                                    <div className="container-fluid">
                                        <div className="mb-npx">
                                            <div className="row align-items-center">
                                                <div className="col-sm-6 col-12 border-bottom-1">
                                                    <h3 className=" ls-tight">Application</h3>
                                                </div>
                                                <div className="col-sm-6 col-12 text-sm-end">
                                                    <Dialog visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                                                        <Website_form />

                                                    </Dialog>
                                                    <div className="mt-1 w-100">
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">S.No</th>
                                                                    <th scope="col">First</th>
                                                                    <th scope="col">Last</th>
                                                                    <th scope="col">Handle</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">1</th>
                                                                    <td>Mark</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>


                                            </div>


                                        </div>
                                    </div>
                                </header>


                            </div>
                        </div>




                        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                            <div className="container-fluid">
                                <div className="w-1 h-100  navbar-brand">
                                    <Link to="/" className="navbar-brand w-100"></Link>
                                    
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
                                                <li><hr /></li>
                                                <li>

                                                    <button className="btn btn-primary w-100" onClick={handleLogout}>Logout</button>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav> */}

                    </div>
                    :
                    <div>
                        <h3>Loin now {message}</h3>
                        <Link to="/login" className="btn btn primary">Login</Link>

                    </div>
            }
        </div>
    )
}

export default ClientDashboard
