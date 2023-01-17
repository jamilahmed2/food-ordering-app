import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout =()=>{
        localStorage.removeItem("authToken");
        navigate('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand  fst-italic" to="/">J.A Food</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" >My Orders<span className="visually-hidden">(current)</span></Link>
                                </li>
                                : ""}
                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <div className='d-flex'>
                                <Link className="btn btn-success mx-1" to="/login">Login</Link>
                                <Link className="btn btn-primary mx-1" to="/signup">Sign up</Link>
                            </div>
                            : 
                            <div>
                                <div className='btn btn-success mx-1'>My Cart</div>
                                <div className='btn btn-danger mx-1' onClick={handleLogout}>Logout</div>
                            </div>
                            }
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar