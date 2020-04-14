import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home-page/Home-page';
import Header from './Components/Header'
import SignInAndSignUpPage from './Pages/Sign-in-Sign-up-Pages';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser : null
  }
 
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
       if(userAuth){
         const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot => {
           this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
           }, () => console.log(this.state))
         });
       }
       else if (!userAuth) {
         this.setState({currentUser: userAuth}, () => console.log(this.state))
       }  
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
