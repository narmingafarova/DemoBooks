import React, { useState } from 'react';
import { Search, Person, Heart, Cart, Facebook, Google } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import userData from '../data/userData.js';

const Nav = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [eye, setEye] = useState("-slash");
    const [passType, setPassType] = useState("password");
    const [alert, setAlert] = useState("");

    const navigate = useNavigate();

    const forgetPass = (e) => {
        e.preventDefault();
        let keyword = prompt("Enter your keyword:");
        let user = userData.find((data) => data.keyword === keyword);
        if (user) {
            setEmail(user.email);
            setPassword(user.password);
            console.log(user.email, user.password);
        }
    }

    const checkUser = (e) => {
        if (!email || !password) {
            e.preventDefault();
            setAlert("alert alert-warning");
            setMessage("Please, fill the blanks!");
        } else {
            const user = userData.find(data => data.email === email && data.password === password);
            if (user) {
                setAlert("alert alert-success");
                setMessage("Successfully logged in :)");
                navigate("/characters");
            } else {
                e.preventDefault();
                setAlert("alert alert-danger");
                setMessage("Email or password is wrong...")
            }
        }
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg py-3 position-fixed">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
                            <li className="nav-item me-2">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" href="/">Shop</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" href="/">Blog</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" href="/">Pages</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" href="/">Elements</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Buy</a>
                            </li>
                        </ul>
                    </div>
                    <a className="navbar-brand mx-auto" href="/">
                        <img src="https://z9d7c4u6.rocketcdn.me/wp-content/themes/woodmart/images/wood-logo-dark.svg" alt="logo" width="210px" />
                    </a>
                    <div className="collapse navbar-collapse justify-content-end ms-5">
                        <ul className="navbar-nav mb-2 mb-lg-0 text-uppercase pe-4 border-end">
                            <li className="nav-item me-2">
                                <a className="nav-link" href="/">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex justify-content-center align-items-center" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                        <ul className='navbar-icons d-flex justify-content-center align-items-center mb-0'>
                            <li className='list-unstyled pe-3'><button className="navbar-icon-item login-btn bg-transparent border-0 text-dark p-0" data-bs-toggle="modal" data-bs-target="#exampleModal"><Person /></button></li>
                            <li className='list-unstyled pe-3'><a href="/" className="navbar-icon-item text-decoration-none text-dark"><Search /></a></li>
                            <li className='list-unstyled pe-3'><a href="/" className="navbar-icon-item text-decoration-none text-dark"><Heart /></a></li>
                            <li className='list-unstyled'><a href="/" className="navbar-icon-item d-flex align-items-center text-decoration-none text-dark"><Cart /> <span>&nbsp; 0 / $0.00</span></a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Modal */}
            <div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content pb-5">
                            <div className="modal-header">
                                <h1 className="modal-title" id="exampleModalLabel">Sign in</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form onSubmit={checkUser}>
                                    <p className={`${alert}`}>{message}</p>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label mb-1">Username or email address <span>*</span></label>
                                        <input type="email" value={email} className="form-control email-input rounded-pill" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label mb-1">Password <span>*</span></label>
                                        <div className="input-group">
                                            <input type={passType} value={password} className="form-control pass-input" id="exampleInputPassword1" aria-describedby="button-addon2" onChange={(e) => setPassword(e.target.value)} />
                                            <button className="btn eye-btn" type="button" id="button-addon2" onClick={() => {
                                                if (eye === "-slash") {
                                                    setEye("");
                                                    setPassType("text");
                                                } else {
                                                    setEye("-slash");
                                                    setPassType("password");
                                                }
                                            }}><i className={`fa-regular fa-eye${eye}`}></i></button>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn submit-btn w-100 rounded-pill text-uppercase text-light mb-4">Log in</button>
                                    <div className="form-remember d-flex justify-content-between align-items-center mb-4">
                                        <div className="remember-input d-flex align-items-center">
                                            <input type="checkbox" id='rememberInput' className='me-2' />
                                            <label htmlFor="rememberInput">Remember me</label>
                                        </div>
                                        <a href="/" className='lost-pass' onClick={forgetPass}>Lost your password?</a>
                                    </div>
                                    <p className='login-choices text-uppercase d-flex justify-content-center align-items-center mb-4'>
                                        <span>Or login with</span>
                                    </p>
                                    <div className="social-icons d-flex flex-column">
                                        <a href='/' className='text-uppercase btn rounded-pill text-light d-flex justify-content-center align-items-center mb-3 py-2'><Facebook className='social me-3' /><span>Facebook</span></a>
                                        <a href='/' className='text-uppercase btn rounded-pill text-light d-flex justify-content-center align-items-center py-2'><Google className='social me-3' />Google</a>
                                    </div>
                                </form>
                            </div>
                            <div className="sign border-top d-flex flex-column justify-content-center align-items-center pt-2">
                                <p className='person-icon mb-0'><Person color='#f1f1f1' fontSize="70px" /></p>
                                <p className='account-ques'>No account yet?</p>
                                <a href="/" className='crt-account text-uppercase text-decoration-none'>Create an account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav