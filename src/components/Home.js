import React from 'react';
import { Navbar } from './Navbar';
import { Products } from './Products';
import '../css/Home.css';
import { useEffect } from 'react';
import { auth } from '../config/Config';
import { useHistory } from 'react-router';

export const Home = ({user}) => {

    //if we want to force the user to login
    // const history = useHistory();

    const history = useHistory();
    useEffect(
        ()=>{
            auth.onAuthStateChanged(
                user=>{
                    if(!user){
                        history.push('/login')
                    }
                }
            );
        }
    )

    return (
        <div className='wrapper'>
            <Navbar user={user} />
            <Products />
        </div>
    )
}
