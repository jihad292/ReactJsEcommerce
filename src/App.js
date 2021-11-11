import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { ProductsContextProvider } from './global/ProductsContext';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { auth,db } from './config/Config'; 
import { Images } from './components/Images';  
import { CartContextProvider } from './global/CartContext';
import { Cart } from './components/Cart';
import { Cashout } from './components/Cashout'

export class App extends Component {

  state = {
    user: null,
}

componentDidMount() {

    // getting user info for navigation bar
    auth.onAuthStateChanged(user => {
        if (user) {
            db.collection('signedUpUserData').doc(user.uid).get().then(snapshot => {
                this.setState({
                    user: snapshot.data().Name,
                })
            })
        }
        else {
            this.setState({
                user: null
            })
        }
    })

}

  render() {
    return (
     <ProductsContextProvider>
      <CartContextProvider>
       <BrowserRouter>
        <Switch>
         <Route exact path="/" component={()=><Home user={this.state.user} />} />
          <Route exact path='/login'>
            <Login />
          </Route>
           <Route exact path='/signup'>
            <Signup />
            </Route>
            <Route exact path='/cartproducts' component={() => <Cart user={this.state.user} />} />
          <Route exact path='/images' component={()=><Images user={this.state.user} />} />
          <Route exact path='/cashout' component={() => <Cashout user={this.state.user} />} />
          <Route exact path='*' component={()=>"404 NOT FOUND"}></Route>
        </Switch>
       </BrowserRouter>
      </CartContextProvider>
     </ProductsContextProvider> 
    )
  }
}

export default App
