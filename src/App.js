import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AddProducts } from './components/AddProducts';
import { Home } from './components/Home';
import { ProductsContextProvider } from './global/ProductsContext';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { auth,db } from './config/Config'; 

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={()=><Home user={this.state.user} />} />
          <Route exact path='/addproducts'>
            <AddProducts />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </BrowserRouter>
     </ProductsContextProvider> 
    )
  }
}

export default App
