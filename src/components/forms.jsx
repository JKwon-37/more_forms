import React, {useState} from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [submitted, setSubmitted] = useState(false);
    // console.log(submitted);

    const handleUsername = (e) => {
        setUsername(e);
        if (e.length < 1){
            setUsernameError("Username is required!");
        } else if (e.length < 3){
            setUsernameError("Username must be longer than 3 characters!");
        } else {
            setUsernameError('')
        }
    }
    const handleEmail = (e) => {
        setEmail(e);
        if (e.length < 1){
            setEmailError("Email is required!");
        } else if (e.length < 3){
            setEmailError("Email must be longer than 3 characters!");
        } else {
            setEmailError('')
        }
    }
    const handlePassword = (e) => {
        setPassword(e);
        if (e.length < 1){
            setPasswordError("Password is required!");
        } else if (e.length < 3){
            setPasswordError("Password must be longer than 3 characters!");
        } else {
            setPasswordError('')
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e);
        if (e.length < 1){
            setConfirmPasswordError("Confirm Password is required!");
        } else if (e.length < 3){
            setConfirmPasswordError("Confirm Password must be longer than 3 characters!");
        } else {
            setConfirmPasswordError('')
        }
    }
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = {username, email, password, confirmPassword};
        setSubmitted(true);
        console.log("Welcome", newUser);
    }

    // method for returning a msg for submitting, stored in a variable
    // const formSubmitMsg = () => {
    //     if (submitted){
    //         return "Thank you for submitting!"
    //     } else {
    //         return "Welcome, please submit the form."
    //     }
    // }
    
    return (
        <div>
            {
                submitted ?
                <h3>"Thank you for submitting the form."</h3> :  // msg for form submit using ternary operator
                <h3>"Welcome, please submit the form."</h3>
            }
            <form onSubmit={createUser}>
                <div>
                    <label>Username:</label>
                    <input type="text" onChange={ (e) => handleUsername(e.target.value)} value = {username} />
                    {usernameError && <p style={{color:'red'}}>{usernameError}</p> }
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={ (e) => handleEmail(e.target.value)} value = {email}/>
                    {emailError && <p style={{color:'red'}}>{emailError}</p> }
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" onChange={ (e) => handlePassword(e.target.value)} value = {password}/>
                    {passwordError && <p style={{color:'red'}}>{passwordError}</p> }
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="text" onChange={ (e) => handleConfirmPassword(e.target.value)} value = {confirmPassword}/>
                    {confirmPasswordError && <p style={{color:'red'}}>{confirmPasswordError}</p> }
                </div>
                <input type="submit" value="Create User"/>
            </form>

            <div>
                <p>
                    Username: {username}
                </p>
                <p>
                    Email: {email}
                </p>
                <p>
                    Password: {password}
                </p>
                <p>
                    Confirm Password: {confirmPassword}
                </p>
            </div>
        </div>
    )
}

export default UserForm