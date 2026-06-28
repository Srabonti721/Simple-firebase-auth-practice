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
            const loggedInUser = result.user
            console.log(loggedInUser);
            if(!loggedInUser.email && loggedInUser.providerData.length){
                console.log("user email is not directly provided", loggedInUser.providerData);
                if(loggedInUser.providerData[0].email){
                    loggedInUser.email = loggedInUser.providerData[0].email;
                     setUser(loggedInUser)
                }
            }
           
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
                    <h2> User name : {user.displayName}</h2>
                    <p> Email : {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }

        </div>
    );
};

export default SignIn;