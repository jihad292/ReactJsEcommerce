import React from 'react';
import { Navbar } from './Navbar';
export const Home = ({user})=>{
    return(
        <div>
            <Navbar user={user} />
        </div>
    );
} 