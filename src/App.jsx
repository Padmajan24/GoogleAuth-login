import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './App.css';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const handleGoogleSignInSuccess = (response) => {
    console.log('Google sign-in success', response);
    alert('Successfully signed in with Google!');
};

const handleGoogleSignInFailure = (response) => {
    console.log('Google sign-in failure', response);
    alert('Failed to sign in with Google.');
};

const App = () => {
    return (
        <GoogleOAuthProvider clientId="176491455208-63q3q3d4acn255p8mavf66fqmv4serev.apps.googleusercontent.com">
            <div className="container">
                <div className="login-section">
                    <h2>Sign In</h2>
                    <Formik
                        initialValues={{ name: '', email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log('Form data', values);
                            alert(' login  successfull !!');
                        }}
                    >
                        {({ touched, errors, isSubmitting }) => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <Field type="text" name="name" />
                                    <ErrorMessage name="name" component="div" className="error" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field type="email" name="email" />
                                    <ErrorMessage name="email" component="div" className="error" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field type="password" name="password" />
                                    <ErrorMessage name="password" component="div" className="error" />
                                </div>
                                <div className="button-container">
                                    <button type="submit" disabled={isSubmitting}>Sign In</button>
                                    <GoogleLogin
                                        onSuccess={handleGoogleSignInSuccess}
                                        onFailure={handleGoogleSignInFailure}
                                        className="google-button"
                                    />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="image-section">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2mXd1Ux1JWvXSnRpPbhWq3oO4u8jUVQCGaw&s" alt="Placeholder" />
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default App;







