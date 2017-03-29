/**
* Login Form
* This is the login form for the app.
* author: @
*/

import React from 'react';

// Stylesheets .scss is like .css but it has built in scoping
import '../stylesheets/components/LoginForm.scss';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        // binding submitFormFunction to this. this refers to our current class.
        this.submitFormFunction = this.submitFormFunction.bind(this);

        this.state = {

        }
    }
    
    submitForm = (event) => {
        // ES6 function. Sets variable submitForm as a function with event as the input. Autobinds to this (important).
        // Run this when the form gets submitted, prevent the default action
        event.preventDefault();
    }

    submitFormFunction(event) {
        // Javascript regular function definition, same function as above, but DOESN'T autobind to this. You need to bind it in constructor.
        // Run this when the form gets submitted, prevent the default action
        event.preventDefault();
    }

    componentDidMount() {
        // If you want to do anything when this element first renders, do it here
        // See lifecycle methods: https://facebook.github.io/react/docs/react-component.html
    }

    render() {
        // This is where you place your HTML. Inside of here goes components and other HTML elements
        return (
            <div class="login-page">
                <div class="btn-login">
                    <button class="btn-fblogin" type="fblogin" value="fblogin">Log in with Facebook</button>
                    <button class="btn-googlelogin" type="googlelogin" value="googlelogin">Log in with Google</button>
                </div>
                <div class="or-separator">
                    <span class="or-separator-text">or</span><hr>
                </div>
                <form class="login-form">
                    <input 
                        type="email" 
                        required
                        class="login-box" 
                        placeholder="Email Address">
                    <input 
                        type="password" 
                        required 
                        class="login-box" 
                        placeholder="Password">
                    <div>
                        <label><input type="checkbox" id="rememberMe" class="rememberMe" value="on">Remember me</label>
                        <a href="/forgot_password" data-from="email">Forgot password?</a>
                    </div>
                    <button class="btn-submit" type="submit" value="Submit">Log in</button>
                </form>
            </div>
            
        );
    }
}

export default LoginForm;