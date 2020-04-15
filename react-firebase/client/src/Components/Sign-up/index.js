import React, {Component } from "react";
import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const initialState = {
    displayName: '',
    email:'',
    password: '',
    confirmPassword: ''
};

class SignUp extends Component {
   state = {
       displayName: '',
       email:'',
       password: '',
       confirmPassword: ''
   }

   handleSubmit = async (event) => {
       event.preventDefault();
       const { displayName, email, password, confirmPassword } = this.state;
       if(password !== confirmPassword){
           alert('passwords not matching');
           this.setState(initialState)
           return;
       }

       try{
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        console.log(user,'------------');
        
        await createUserProfileDocument(user, { displayName });

       } catch(error) {
        console.log(error.message)
       }

   }

   handleChange = (e) => {
     const { name, value } = e.target;
     this.setState({[name]: value})
   }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div>
                <h2>I don't have an account</h2>
                <span>Create your account</span>

                    <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        handleChange={this.handleChange}
                        value={displayName}
                        label='displayName'
                        required
                    />
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='confirm password'
                        required
                    />
                    <CustomButton  type='submit' label='sign up' />
                    </form>
            </div>
        )
    }
}

export default SignUp;