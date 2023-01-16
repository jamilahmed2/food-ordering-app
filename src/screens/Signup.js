import React,{useState} from 'react'
import {  Link } from 'react-router-dom'

const Signup = () => {
    const [credentials, setCredentials] = useState({name:'',email:'',geolocation:''})
   
    const handleSignup= async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser",{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        });
        const json = await response.json()
        console.log(json);

        if(!json.success){
            alert("Enter a valid credentials")
        }

    }
    const onChange =(e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Username</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} aria-describedby="emailHelp" onChange={onChange}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="geolocation" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geolocation'  value={credentials.geolocation} onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign up</button>
                    <Link to='/login' className='m-3 btn btn-success'>Login</Link>
                </form>
            </div>
        </>
    )
}

export default Signup