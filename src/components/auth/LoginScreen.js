import React from 'react';
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';


export const LoginScreen = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector( state => state.ui );
    console.log(loading); 
    

    const [ formValues, handleInputChange/*, reset*/ ] = useForm({
        email: 'warner3898@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        console.log(email, password);

        dispatch( startLoginEmailPassword( email, password) ); //del auth action

        const lastPath = localStorage.getItem('lastPath') || '/';

        navigate(lastPath, {
          replace: true
        }); 
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }
     
    return (
        <div className='auth__main'>
         <div className='auth__box-container'>

            <h3 className="auth__title">Login</h3>

            <form onSubmit={ handleLogin }>

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled = { loading }
                >
                    Login
                </button>

                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account    
                </Link>

            </form>
                         
         </div>
        </ div>
    )
}
