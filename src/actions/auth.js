import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types";
import { uiFinishLoading, uiStartLoading } from './ui';
import Swal from 'sweetalert2';


export const startLoginEmailPassword = ( email, password) => {

    return (dispatch) => {
        
        dispatch( uiStartLoading() );
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( ({ user }) => {

            dispatch( 
                login( user.uid, user.displayName)
            );
            dispatch( uiFinishLoading() );
        }).catch( err => {
            dispatch( uiFinishLoading() );
            console.log( err ); 
            Swal.fire('Error', err.message, 'error');
        })
    }
        
}; 

export const startRegisterWithPassAndEmail = ( email, password, name ) => {

   return ( dispatch ) => {
       firebase.auth().createUserWithEmailAndPassword( email, password )
       .then( async({ user }) => {

            await user.updateProfile({ displayName: name });
            dispatch( 
                login( user.uid, user.displayName)
            );
        }).catch( err => {
            console.log( err ); 
            Swal.fire('Error', err.message, 'error');
        })
   }

}; 

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( ({ user }) => {
            dispatch( 
                login( user.uid, user.displayName)
            );
            
        });
    }
}


export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogOut = () => {

    return async( dispatch ) => {
        await firebase.auth().signOut();
        dispatch( logOut )
    }

}; 

export const logOut = () => ({
    type: types.logout
}); 