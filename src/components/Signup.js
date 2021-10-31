import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../config/Config';
import { Link } from 'react-router-dom';

export const Signup = (props) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    let history = useHistory();
    const signup = (e)=>{
        e.preventDefault();
        // console.log('submitted!!!');
        // console.log(name,email,password); 
        auth.createUserWithEmailAndPassword(email,password).then(
            cred=>{
                db.collection('signedUpUserData').doc(cred.user.uid).set({
                    Name : name,
                    Email: email,
                    password: password
                }).then(
                    ()=>{
                        setName('');
                        setEmail('');
                        setPassword('');
                        history.push('/login');
                    }
                ).catch(err=>setError(err.message));
            }
        ).catch(err=>setError(err.message));
    }

    return (
        <div className='container'>
            <br/>
            <h2>SignUp</h2>
            <hr/>
            <form autoComplete="off" className='form-group' onSubmit={signup}>
                <label htmlFor='name'>Name</label>
                <br/>
                <input type='text' className='form-control' required placeholder='Name' onChange={(e)=>setName(e.target.value)} value={name} />
                <br/>

                <label htmlFor='email'>Email</label>
                <br/>
                <input type='email' className='form-control' required placeholder='example@gmail.com' onChange={(e)=>setEmail(e.target.value)} value={email}  />
                <br/>

                <label htmlFor='password'>Password</label>
                <br/>
                <input type='password' className='form-control' required placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password} />
                <br/>

                <button type='submit' className='btn btn-outline-success'>Register</button>

            </form>
            {error && <div className='error-msg'>{error}</div>}
            <br />
            <span>
                Already have an account? Login
                <Link to='/Login'>Here</Link>
            </span>
            

        </div>
    )
}
