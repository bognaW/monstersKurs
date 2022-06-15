import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInWitGooglehRedirect } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import Button from '../../components/button/button.component';
// import { async } from '@firebase/util';


const SignIn = () => {
    // useEffect(() => {
    //     async function foo() {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     foo();
    // }, [] );
    
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = createUserDocumentFromAuth(user);
    };
    
    return (
        <div>
            <h1>Sign In Page</h1>
            <Button onClick={ logGoogleUser }>
                Sign in with Google Popup
            </Button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;