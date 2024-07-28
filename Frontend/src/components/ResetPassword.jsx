import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "./Loading";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  let rootUrl =  import.meta.env.VITE_API_URL
  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = `${rootUrl}/api/user/password-reset/${params.token}`;

    if(password ===repassword ){
    try {
      setLoading(true)
      await axios.post(url, { password });
      toast.success("Password reset successfully.");
      navigate("/");
    } catch (error) {
      console.log(url);
      toast.error(
        "Password reset failed: " + error.response?.data?.message ||
          error.message
      );
    } finally {
      setLoading(false)
    }
} else {
    toast.error("Password did not match.")
}
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center  bg-slate-100 dark:bg-slate-800 h-screen w-screen">
      <div className="bg-slate-200 dark:bg-slate-700 shadow-md rounded-lg pl-8 pr-8 pt-2 pb-8 mb-4 flex-col gap-2  flex">
          <div className="text-end ">
            <Link to="/">
              <span className="cursor-pointer">✕</span>
            </Link>
          </div>
          <h1 className="text-xl mb-4">Reset Password</h1>
        <form onSubmit={handleSubmit} 
        className=" flex flex-col gap-4"
        >
            <div>
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
            Password
          </label>
          <input
          id="password"
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-slate-300 dark:bg-slate-600 dark:border-slate-700 w-80 px-3 py-1 border rounded-md outline-none"
          />
          </div>

          <div>
          <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="repassword">
          Re-enter Password
          </label>
          <input
          id="repassword"
            type="password"
            placeholder="Re-enter new password"
            value={repassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
            className="bg-slate-300 dark:bg-slate-600 dark:border-slate-700 w-80 px-3 py-1 border rounded-md outline-none"
          />
          </div>
          <button type="submit" 
          className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 w-fit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
    {loading && <Loading />}
    </>
  );
};

export default ResetPassword;
