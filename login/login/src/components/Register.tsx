import React, { useRef, useState } from 'react';
import '../assets/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import axios from 'axios';

const Register = () => {

    const toast = useRef<Toast>(null);
    const [error, setError] = useState<string | null>(null);

    const [value, setValue] = useState({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        password: "",
        confirm_password: ""
    });
    var navigate = useNavigate();

    const handleChange = (e: any) => {
        setValue({ ...value, [e.target.name]: e.target.value });

    };
    /// prime toast
    const showSuccess = () => {
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Your account has been registered', life: 1000 });
    }
    const showWarning = () => {
        toast.current?.show({ severity: 'error', summary: 'Warning', detail: 'Email already exists', life: 1000 });
    }

    const submit_form =(e: any) => {
        e.preventDefault();
    
        if (value.password !== value.confirm_password) {
            setError("Passwords do not match.");
            return;
        }
    
        setError(null);
         axios.post('http://localhost:5001/register', value)
        .then(res => {
            if (res.data.status === "Success") {
                showSuccess();  // Show a success message
                setTimeout(() => {
                    navigate('/login');
                },1000)
            }else{
                console.log("Error");
            }
        })
        .then(err => console.log(err));


        // ===
        // try {
        //     const response = await axios.post('http://localhost:5000/client/register', value);
            
        //     // Handle the response
        //     if (response.data.message === "success") {
        //         showSuccess();  // Show a success message
        //         setTimeout(() => {
        //             navigate('/');
        //         }, 1000);
        //     }
        // } catch (error: any) {
        //     // Handle error response
        //     if (error.response && error.response.status === 409) {
        //         // Email already exists
        //         showWarning();  // Show a toast or alert for "Email already exists"
        //     } else {
        //         console.log(error);
        //     }
        // }
    };
    


    return (
        <>
            <Toast ref={toast} />
            <div className="form_wrapper">
                <div className="form_container">
                    <div className="title_container">
                        <h2 className='text-bold text-underline'>Sign up with Neoripples for Onboarding</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="">
                            <form id="inquiryForm" onSubmit={submit_form}>
                                <div className="input_field">
                                    <input type="text" name="first_name" placeholder="First Name" onChange={e => setValue({...value, first_name:e.target.value})} required />
                                </div>
                                <div className="input_field">
                                    <input type="text" name="last_name" placeholder="Last Name" onChange={e => setValue({...value, last_name:e.target.value})} />
                                </div>
                                <div className="input_field">
                                    <input type="email" name="email" id="email" placeholder="Email" onChange={e => setValue({...value, email:e.target.value})} required />
                                </div>
                                <div className="input_field">
                                    <input type="text" name="mobile" id="mobile" placeholder="Mobile" onChange={e => setValue({...value, mobile:e.target.value})} required />
                                </div>
                                <div className="input_field">
                                    <input type="password" name="password" id="password" placeholder="Password" onChange={e => setValue({...value, password:e.target.value})} required />
                                </div>
                                <div className="input_field">
                                    <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" onChange={e => setValue({...value, confirm_password:e.target.value})} required />
                                </div>
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                <div className="input_field select_option">
                                    <button type="submit" className="btn btn-sm bg-primary text-light w-100 ">Sign-up</button>
                                </div>
                                <p>Already have an account? <Link className="text-sm-bold" to="/login">login</Link></p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
