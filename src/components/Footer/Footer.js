import React from 'react';
import { GoLocation, GoDeviceMobile, GoMail } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer className="text-white p-4">
                <div className="row lh-1">
                    <div className="bond col-3">
                        <div className="d-flex flex-column">
                            <h5>EASY LEARNING</h5>
                            <NavLink className="text-decoration-none navLink nav-item" to="/home">
                                <a className="text-white nav-link fw-bold fs-6" aria-current="page">Home</a>
                            </NavLink>
                            <NavLink className="text-decoration-none navLink nav-item" to="/courses">
                                <a className="text-white nav-link active fw-bold fs-6">Courses</a>
                            </NavLink>
                            <NavLink className="text-decoration-none navLink nav-item" to="/ourcoatches">
                                <a className="text-white nav-link active fw-bold fs-6" >Our Coatches</a>
                            </NavLink>
                            <NavLink className="text-decoration-none navLink nav-item" to="/about">
                                <a className="text-white nav-link active fw-bold fs-6">About</a>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-3">
                        <h5>Useful links</h5>
                        <span className="d-block text-white nav-link fw-bold fs-6">About Us</span>
                        <span className="d-block text-white nav-link fw-bold fs-6">Terms & condition</span>
                        <span className="d-block text-white nav-link fw-bold fs-6">Privacy Policy</span>
                        <span className="d-block text-white nav-link fw-bold fs-6">Student spotlight</span>
                    </div>
                    <div className="col-3">
                        <h5>Learning</h5>
                        <span className="d-block text-white nav-link fw-bold fs-6">Languages</span>
                        <span className="d-block text-white nav-link fw-bold fs-6">Communication</span>
                        <span className="d-block text-white nav-link fw-bold fs-6">Handling Thinks</span>
                    </div>
                    <div className="col-3">
                        <h5>Contact Us</h5>
                        <address className="d-block text-white nav-link fw-bold mb-0"><GoLocation className="iconColor" />Level-2, 27, Nijam Centre, Jatrabari, Dhaka</address>
                        <address className="d-block text-white nav-link fw-bold mb-0"><GoDeviceMobile className="iconColor" />+91 458 654 528</address>
                        <address className="d-block text-white nav-link fw-bold mb-0"><GoMail className="iconColor" />example@gmail.com</address>
                    </div>
                    <small className="mt-3">All Right Reserved © by Muntasir</small>
                </div>
            </footer>
        </div>
    );
};
export default Footer;