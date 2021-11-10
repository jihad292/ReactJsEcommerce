import React from 'react';
import { Navbar } from './Navbar';
import { Products } from './Products';
import '../css/Home.css';

export const Home = ({user}) => {

    //if we want to force the user to login
    // const history = useHistory();

    // useEffect(
    //     ()=>{
    //         auth.onAuthStateChanged(
    //             user=>{
    //                 if(!user){
    //                     history.push('/login')
    //                 }
    //             }
    //         );
    //     }
    // )

    return (
        <div className='wrapper'>
            <Navbar user={user} />
            <Products />
        </div>
    )
}
