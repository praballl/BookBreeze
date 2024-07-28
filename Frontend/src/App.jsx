import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Contact from "./components/ContactMe";
import About from "./components/About";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import EmailVerification from "./components/EmailVerification";
import SendEmailForResetPass from './components/SendEmailForResetPass'
import ResetPassword from "./components/ResetPassword";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/password-reset-request" element={<SendEmailForResetPass />} />
          <Route path="/user/:id/verify/:token" element={<EmailVerification />} />
          <Route path="/password-reset/:token" element={<ResetPassword />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
