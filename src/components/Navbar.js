import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Fit Logo.jpeg';
import { Icon } from 'react-icons-kit';
import { cart } from 'react-icons-kit/entypo/cart';
import { useHistory } from 'react-router-dom';
import  { auth } from '../config/Config';
import { CartContext} from '../global/CartContext'; 
 
export const Navbar = ({user}) => {
    const history = useHistory();
    const { totalQty } = useContext(CartContext);
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
               <Link to='/'> <img src={logo} alt='' /> </Link>
           </div>

           {/* if user do not exist */}
           { !user && <div className='rightside'>
               <Link to='/products' className='navlinks'><i><b>Products</b></i></Link>
               <Link to='/images' className='navlinks'><i><b>Media</b></i></Link>
               <Link to='/signup' className='navlinks'><i><b>SignUp</b></i></Link>
               <Link to='/login' className='navlinks'><i><b>LOGIN</b></i></Link>
           </div>}

            {/* if user exist */}
            { user && <div className='rightside'>
                 <Link to='/videos' className='navlinks'><i><b>Videos</b></i></Link>
                 <Link to='/images' className='navlinks'><i><b>Media</b></i></Link>
                <span><Link to='/products' className='navlinks'><i><b>{user}</b></i></Link></span>
                <span><Link to='cartproducts'><Icon icon={cart} /></Link></span>
                
                  <span className='no-of-products'>{totalQty}</span>
                
                <span><button className='logout-btn' onClick={logout} ><i><b>LOGOUT</b></i></button></span>
            </div> }


        </div>
    )
}
