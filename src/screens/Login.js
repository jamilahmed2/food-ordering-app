import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: '', password: '' })

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);

        if (!json.success) {
            alert("Enter a valid credentials")
        }

        if (json.success) {
            localStorage.setItem("authToken", json.authToken)
            navigate('/');
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} aria-describedby="emailHelp" onChange={onChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link to='/signup' className='m-3 btn btn-success'>Sign up</Link>
                </form>
            </div>
        </>
    )
}

export default Login