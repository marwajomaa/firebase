import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home-page/Home-page';
import Header from './Components/Header'
import SignInAndSignUpPage from './Pages/Sign-in-Sign-up-Pages';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser : null
  }
 
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
      console.log(user);
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    const { currentUser } = this.state;
    return (
      <div>
       <Header currentUser={ currentUser }/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/signin-signup' component={SignInAndSignUpPage} />
      </Switch>
    </div>
    );
  }
}

export default App;
