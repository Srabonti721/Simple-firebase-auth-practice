import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase.init';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const handleSignIn = () => {
        console.log("sign in successful");
        
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);

            })
            .catch(error => {
                console.log(error);

            })
    }
    return (
        <div>
            <h1>please Sign in </h1>
            <button onClick={handleSignIn}>Sign in With google</button>
        </div>
    );
};

export default Login;