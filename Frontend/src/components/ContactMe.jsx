"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import Footer from "./Footer";
import toast from "react-hot-toast";
export default function ContactMe() {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: import.meta.env.TO_NAME,
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    
    const updatedFormData = { ...formData, from_name: formData.email };
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID, // replace with your service ID
        import.meta.env.VITE_TEMPLATE_ID, // replace with your template ID
        updatedFormData,
        import.meta.env.VITE_PUBLIC_KEY // replace with your user ID (public key)
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast.success("Message sent Successfully");
          setFormData({
            to_name: "Prabal Namdeo",
            email: "",
            message: "",
            from_name: ""
          });
        },
        (error) => {
          console.log("Email error:", error.text);
          toast.error("Error: Please try again later.");
        }
      );
  };

  return (
    <div>
      <Navbar />
      <div className="isolate dark:text-white px-6 py-24 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
          // style={{
          //   clipPath:
          //     'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          // }}
          // className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
            Contact
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Have any questions or want to get in touch? Fill out the form below
            and I'll get back to you as soon as possible.
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="from_name"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                Full Name
              </label>
              <div className="mt-2.5">
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  required
                  value={formData.from_name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-100"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-100"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-slate-100"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
