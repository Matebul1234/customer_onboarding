import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Toast } from 'primereact/toast';

const Login = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        email: "",
        password: ""
    });
    const toast = useRef<Toast>(null);

    axios.defaults.withCredentials = true;
    const [error, setError] = useState(""); // For handling validation errors

    const handleChange = (e: any) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    };
    const showError = () => {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Password not matched', life: 1000 });
    }
    const showEmailError = () => {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Emial not exitsed', life: 1000 });
    }

    const submit_form = async (e: any) => {
        e.preventDefault();

        axios.post('http://localhost:5001/login', value)
        .then(res => {
            console.log(res.data.Error,"========")
            if(res.data.Error === "password not matched"){
                showError();
            }
            if(res.data.Error === "No email exitsed"){
                showEmailError();
            }

            if (res.data.Status === "Success") {
                setTimeout(() => {
                    navigate('/clientdashboard');
                })
            }else{
                console.log("Error");
            }
        })
        .then(err => console.log(err));



        setError(""); // Clear previous errors

        if (!value.email || !value.password) {
            setError("Please fill out both fields");
            return;
        }
        // try {
        //     const response = await axios.post('http://localhost:5000/login', value);
        //     console.log("Successful login", response.data);

        //     if (response.data.message === "Login successful") {
        //         // Store token in cookies
        //         Cookies.set('auth_token', response.data.token, { expires: 1 }); // 1 day expiration

        //         // Navigate to dashboard
        //         navigate('/clientsdashboard');
        //     }
        // } catch (error) {
        //     setError("Invalid email or password");
        //     console.error(error);
        // }
    };

    return (
        <>
        <Toast ref={toast} />
        <div className="form_wrapper" style={{width:'500px'}}>
            <div className="form_container">
                <div className="title_container">
                    <h2 className='text-bold text-underline'>Login with Neoripples for Onboarding</h2>
                </div>
                <div className="row clearfix">
                    <div className="">
                        <form id="loginForm" onSubmit={submit_form}>
                            <div className="input_field">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={e => setValue({...value, email:e.target.value})}
                                    required
                                />
                            </div>
                            <div className="input_field">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={e => setValue({...value, password:e.target.value})}
                                    required
                                />
                            </div>
                            <div className="input_field remember_me">
                                <input type="checkbox" name="checkbox" id="checkbox" />
                                <label style={{ marginLeft: '5px' }}>Remember me</label>
                            </div>

                            {error && <p className="error-message">{error}</p>} {/* Show error if any */}

                            <div className="input_field select_option">
                                <button type="submit" className="btn btn-sm bg-primary text-light w-100">
                                    Login
                                </button>
                            </div>

                            <p>
                                Don't have an account? <Link to="/register">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Login;
