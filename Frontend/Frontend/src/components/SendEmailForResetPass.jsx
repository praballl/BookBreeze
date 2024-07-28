import {useState} from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Loading from './Loading';


const SendEmailForResetPass = () => {
  let rootUrl =  import.meta.env.VITE_API_URL
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    // console.log(apiUrl);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(rootUrl);
      setLoading(true)
      
      const response = await axios.post(`${rootUrl}/api/user/password-reset-request`, { email });
    //   console.log("emaillll",response);
      if (response.status == 200){
        navigate(-1)
        
      }
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error.response.data.message);
    } finally {
      setLoading(false)
    }
  };
  return (
    <>
    <div className='flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-800 h-screen w-screen'>
        <Toaster />
        <div className="bg-slate-200 dark:bg-slate-700 shadow-md rounded-lg pl-8 pr-8 pt-2 pb-8 mb-4 flex-col gap-2  flex">
            <div className='text-end '>
                <Link to="/"> 
            <span className='cursor-pointer'
            
            >✕</span>
            </Link>

            </div>
        <h1 className='text-2xl'>Forget Password?</h1>
        <p className='mb-2'>We will send a link to your email for reset password.</p>
        <form onSubmit={handleSubmit} 
        >
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-slate-300 dark:bg-slate-600 dark:border-slate-700 w-80 px-3 py-1 border rounded-md outline-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
          >
            Send
          </button>
        </div>
      </form>
      </div>
    </div>
      {loading &&<Loading /> }
    </>
  )
}

export default SendEmailForResetPass
