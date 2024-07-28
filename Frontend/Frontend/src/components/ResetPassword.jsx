import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const  params  = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let url = `http://localhost:4001/api/user/password-reset/${params.token}`
        // console.log(url);
        try {
            await axios.post(url, { password });
            toast.success("Password reset successfully.");
            navigate('/');
        } catch (error) {
            console.log(url);
            toast.error("Password reset failed: " + error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
                <h1 className="text-xl mb-4">Reset Password</h1>
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mb-4"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPassword;
