import React, { useEffect, useState } from 'react';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth'
import { JournalScreen } from '../components/journal/JournalScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { PrivateRoute } from '../routers/PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isAutenticated, setIsAutenticated] = useState(false);

    useEffect(() => {

        firebase.auth().onAuthStateChanged( (user) => {
            
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsAutenticated(true);
            }else{
                setIsAutenticated(false);
            }

            setChecking( false );
        });

    }, [ dispatch, setChecking, setIsAutenticated ])
    

    if ( checking ) return  <h1>Espere...</h1>

    return (
        <BrowserRouter>
              
           <Routes>

                    <Route path="/auth/login" element={
                        <PublicRoute isAutenticated={ isAutenticated }>
                            <LoginScreen     />
                        </PublicRoute>
                        }
                    />

                    
                    <Route path="/auth/register" element={
                        <PublicRoute isAutenticated={ isAutenticated }>
                            <RegisterScreen     />
                        </PublicRoute>
                        }
                    />

                    <Route path="/journal" element={
                                <PrivateRoute isAutenticated={ isAutenticated }>
                                    <JournalScreen />
                                </PrivateRoute>
                                }
                    />

                    <Route path = "/*" element = { <Navigate to="/auth/login" /> }></Route>
           </Routes>
                
        </BrowserRouter>
    )
}
