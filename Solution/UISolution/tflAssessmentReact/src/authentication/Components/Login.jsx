import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            ContactNumber: contact,
            Password: password,
            Lob: 'banking'
        };
        const url = 'http://localhost:5142/api/auth/signin';
        const url1 = `http://localhost:5142/api/users/contact/${contact}`;

        try {
            // First API call to authenticate
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();

            if (result.token) {
                localStorage.setItem('jwt_token', result.token);

                // Second API call to get user info
                const userResponse = await fetch(url1);
                const userData = await userResponse.json();
                const userId = userData.id;  

                console.log('User Data:', userData);

                // Third API call to get assessment details
                const url2 = `http://localhost:5151/api/assessment/employee/${userId}`;
                const assessmentResponse = await fetch(url2, {
                    headers: {
                        'Authorization': `Bearer ${result.token}`
                    }
                });
                const assessmentData = await assessmentResponse.json();
                console.log('Assessment Data:', assessmentData);

                navigate('/profile', { state: { userId } }); 
            } else {
                alert('Login is not Valid');
            }
        } catch (error) {
            console.log(error);
            alert('An error occurred. Please check your credentials or try again later.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div><h1>Login Here..</h1></div>
                <hr />
                <br />
                <label>Contact Number: </label>
                <input
                    type="text"
                    id="contactnumber"
                    name="contactnumber"
                    placeholder="Enter the Contact Number"
                    onChange={(e) => setContact(e.target.value)}
                />
                <br /><br />
                <label>Password: </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />
                <input type="submit" value="Login" />
                <br />
                <label>If you are a new user, click on Register Link</label>
                <br />
                <Link to="/register">Register</Link>
            </form>
        </div>
    );
}

export default Login;
