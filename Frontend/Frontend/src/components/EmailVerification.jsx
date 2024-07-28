import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import verifiedLogo from '../assets/verifiedLogo.png'

function EmailVerification() {
  const rootUrl = import.meta.env.VITE_API_URL
  const params = useParams();
  const [apiRes, setApiRes] = useState("")
  const [loading, setLoading] = useState(true);
  const [validUrl, setValidUrl] = useState(false);
  
  useEffect(() => {
    const verifyEmail = async () => {
      try {
        console.log("this is params",params)

        const url = `${rootUrl}/api/user/${params.id}/verify/${params.token}`;
        console.log("This is url",url)
        const response = await axios.get(url);
        console.log(response);
        toast.success(response.data.message);
        setApiRes(response.data.message)
        setValidUrl(true);
        // navigate('/signup'); 
      } catch (error) {
        console.log(error);
        toast.error("Verification failed: " + (error.response?.data?.message || error.message));
        setApiRes("Verification failed: " + (error.response?.data?.message || error.message))
        setValidUrl(false);
        // navigate('/'); // Redirect to home or any other page
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [params]);

  return (
    <div className="flex h-screen items-center justify-center p-2">
      {loading ? (
        <div>Loading...</div>
      ) : validUrl ? (
        <div className='flex items-center flex-col gap-2 text-center'> 
          
          <h1 className='text-4xl'>Email verified successfully</h1>
          <img className='h-40' src={verifiedLogo} alt="verified-logo" />
          <p>{apiRes}</p>
          <Link to="/">
            <button className="bg-slate-600 rounded-lg text-white hover:bg-slate-700 hover:scale-105 p-2 duration-300">Go Back</button>
          </Link>
        </div>
      ) : (
        <div className='flex items-center flex-col gap-2 text-center'>
          <h1 className='text-4xl'>404 Not Found</h1>
          
          <p>{apiRes}</p>
          <Link to="/">
            <button className="bg-slate-600 rounded-lg text-white hover:bg-slate-700 hover:scale-105 p-2 duration-300">Go Back</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default EmailVerification;
