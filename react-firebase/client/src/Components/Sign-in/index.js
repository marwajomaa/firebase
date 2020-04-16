import React, {Component } from "react";
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { auth, signInWithGoogle, createUserProfileDocument } from '../../firebase/firebase.utils';

const initialState = {
    email: '',
    password: ''
}
class SignIn extends Component {
   state = {
       email:'',
       password: ''
   }

   handleSubmit = async event => {
       event.preventDefault();
       
       const { email, password } = this.state;
       const user = await auth.signInWithEmailAndPassword(email, password);
       this.setState(initialState)
       try{
    } catch(error) {
        console.log('error signing in user', error.message);
        
    }
   }

   handleChange = (e) => {
     const { name, value } = e.target;
     this.setState({[name]: value})
   }

    render(){
        return(
            <div>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                    <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <CustomButton  type='submit' label='sign in' />
                    <CustomButton  onClick={signInWithGoogle} label='sign in with google' />
                    </form>
            </div>
        )
    }
}

export default SignIn;
