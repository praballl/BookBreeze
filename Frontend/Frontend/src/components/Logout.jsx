import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import Loading from "./Loading";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const [loading, setLoading] = useState(false)
  const handleLogout = () => {
    setLoading(true)
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      
      localStorage.removeItem("Users");
      setTimeout(() => {
        toast.success("Logout successfully");
        window.location.reload();
        setLoading(false)
      }, 3000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <>
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
    {loading && <Loading />}
    </>
  );
}

export default Logout;
