import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/ecommerce.png';
import { Icon } from 'react-icons-kit';
import { cart } from 'react-icons-kit/entypo/cart';
import { useHistory } from 'react-router-dom';
import  { auth } from '../config/Config';
 
export const Navbar = ({user}) => {
    const history = useHistory();
    const logout = ()=>{
        auth.signOut().then(
            ()=>{
                history.push('/login');
            }
        )
    }
    return (
        <div className='navbox'>
           <div className='leftside'>
               <img src={logo} alt='' />
           </div>

           {/* if user do not exist */}
           { !user && <div className='rightside'>
               <Link to='/signup' className='navlinks'>Sign Up</Link>
               <Link to='/login' className='navlinks'>LOGIN</Link>
           </div>}

            {/* if user exist */}
            { user && <div className='rightside'>
                <span><Link to='/' className='navlinks'>{user}</Link></span>
                <span><Link to='cartproducts'><Icon icon={cart} /></Link></span>
                <span><button className='logout-btn' onClick={logout} >LOGOUT</button></span>
            </div> }


        </div>
    )
}
