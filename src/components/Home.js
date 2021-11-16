import React from 'react';
import { Navbar } from './Navbar';
import '../css/Home.css';
import { FaInstagram,FaEnvelope,FaPhone } from 'react-icons/fa'
export const Home = ({user})=>{
    document.body.style.backgroundImage = "url('../images/Capture.PNG')";
    return(
        
        <div className='homeScreenMain'>
            <div>
            <Navbar user={user} />
            </div>
            <div className='mainDiv'>
                <h2>Pain is temporary, pride is forever...</h2>
                <div className='contactUsDiv'>  
                <a  href='https://www.instagram.com/fit14gym/?utm_medium' target="_blank"><p><FaInstagram /></p></a>
                <p><FaEnvelope /> karen.fh00@gmail.com</p>
                <p><FaPhone /> Coach Wissam Hajj Hssein +96171977921</p>
                <p><FaPhone /> Manager Karen Farah +96171813343</p>
                </div>
            </div> 
        </div>
        
    );
} 