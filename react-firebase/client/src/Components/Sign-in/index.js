import React, {Component } from "react";
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils'
class SignIn extends Component {
   state = {
       email:'',
       password: ''
   }

   handleSubmit =(event)=>{
       event.preventDefault();
       this.setState({email:'', password: ''})
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
