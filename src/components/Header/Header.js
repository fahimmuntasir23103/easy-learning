import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container">
                    <a className="logo navbar-brand me-10 fs-3 fw-bold" href="#">EASY LEARNING</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navLinkContainer navbar-nav" >
                            <NavLink className="text-decoration-none navLink nav-item" to="/home">
                                <a className="nav-link active fw-bold" aria-current="page">Home</a>
                            </NavLink>
                            <NavLink className="text-decoration-none navLink nav-item" to="/courses">
                                <a className="nav-link active fw-bold">Courses</a>
                            </NavLink>
                            <NavLink className="text-decoration-none navLink nav-item" to="/ourcoatches">
                                <a className="nav-link active fw-bold" >Our Coatches</a>
                            </NavLink>
                            <NavLink className="text-decoration-none navLink nav-item" to="/about">
                                <a className="nav-link active fw-bold">About</a>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1>Build Skills with
                Online Courses from expert instructor</h1>
            <p className="">Start learning your favorite language fluently by joining our live class and conqureror the world!</p>
        </header>
    );
};

export default Header;