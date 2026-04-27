import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useNavbar } from '../../Navigation/NavbarContext';

function Login() {
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { updateNavLinks } = useNavbar();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            ContactNumber: contact,
            Password: password,
            Lob: 'banking',
        };

        const url = 'http://localhost:5142/api/auth/signin';
        const url1 = `http://localhost:5142/api/users/contact/${contact}`;

        try {
            // Sending login request
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (result.token) {
                localStorage.setItem('jwt_token', result.token);

                // Fetch user data based on contact number
                const userResponse = await fetch(url1);
                const userData = await userResponse.json();
                const userId = userData.id;
                

                // const firstName = userData.firstName;
                // const lastName = userData.lastName;

                console.log('User Data:', userData);

                // Fetch assessment data based on user ID
                const url2 = `http://localhost:5151/api/assessment/employee/${userId}`;
                const assessmentResponse = await fetch(url2, {
                    headers: {
                        'Authorization': `Bearer ${result.token}`,
                    },
                });
                const assessmentData = await assessmentResponse.json();
                const employeeName = `${assessmentData.firstName} ${assessmentData.lastName}`; 
                console.log('Name:',employeeName);
                console.log('Assessment Data:', assessmentData);

                const role = assessmentData.role ? assessmentData.role.trim() : 'Student'; 
                const candidateId = assessmentData.id;
                console.log('Trimmed Role:', role);
                console.log('Candidate ID:', candidateId);

                if (role === 'Teacher') {
                    console.log('Navigating to Teacher Dashboard');
                    updateNavLinks([
                        { name: 'Home', path: '/' },
                        { name: 'Logout', path: '/login' },
                    ]);
                    navigate('/teacher',{ state: { employeeName,candidateId } });
                } else {
                    console.log('Navigating to Student Dashboard');
                    updateNavLinks([
                        { name: 'Home', path: '/' },
                        { name: 'Logout', path: '/login' },
                    ]);
                    navigate('/student', { state: { employeeName,candidateId } }); 
                }
            } else {
                alert('Login is not valid');
            }
        } catch (error) {
            console.log(error);
            alert('An error occurred. Please check your credentials or try again later.');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white">Login Here</h1>
                <hr className="my-4" />

                <div>
                    <label className="block text-gray-700 dark:text-gray-300">Contact Number:</label>
                    <input
                        type="text"
                        id="contactnumber"
                        name="contactnumber"
                        placeholder="Enter the Contact Number"
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 dark:text-gray-300">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
                    Login
                </button>

                <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400">If you are a new user, click on Register Link</p>
                    <Link to="/newuser" className="text-indigo-600 hover:underline dark:text-indigo-400">Register</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
