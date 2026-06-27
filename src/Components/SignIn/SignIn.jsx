import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';

const SignIn = () => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)

            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignInWithGithub = () =>{
        signInWithPopup(auth, githubProvider)
        .then((result=>{
            console.log(result);
            setUser(result.user)
        }))
        .catch((error)=>{
            console.log(error);
            
        })
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log('user sign out completed');
            setUser(null)
        }).catch((error) => {
            console.log(error);

        })
    }
    return (
        <div>
            <h2>sign in please</h2>
            {
                user? 
                <button onClick={handleSignOut}>Sign out</button>: <>
                <button onClick={handleSignIn}>Sign in with Google</button>
                <button onClick={handleSignInWithGithub}>Sign In with github</button>
                </>
            }
            {
                user && <div>
                    <h2>{user.displayName}</h2>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }

        </div>
    );
};

export default SignIn;