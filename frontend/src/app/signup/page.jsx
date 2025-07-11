"use client";

import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
      alert("All fields are required.");
      return;
    }
    console.log("Form Submitted", formData);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full text-white bg-black overflow-hidden">
      {/* Left Side */}
      <div className="flex flex-col w-full md:w-2/5 justify-center bg-gradient-to-br from-[#0A80ED] to-black p-6">
        <div className="relative flex flex-col items-center justify-center gap-4">
          <img
            style={{ objectPosition: "0px 8px" }}
            className="object-cover invert w-20 sm:w-28 md:w-40 lg:w-48"
            src="/logo.svg"
            alt="Nexura Logo"
          />
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">NEXURA</h2>
            <p className="hidden md:block text-sm sm:text-base tracking-wide text-gray-200">
              YOUR ROAD TO NEXT LEVEL AURA
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col w-full md:w-3/5 justify-center items-center gap-6 px-6 py-8 sm:px-12 overflow-y-auto">
        <h3 className="w-full max-w-md py-3 text-center rounded-lg bg-gradient-to-br from-[#0A80ED] to-black text-lg font-semibold">
          Create Your Nexura Account
        </h3>

        {/* Social Login */}
        <button
          className="w-full max-w-md py-3 flex items-center justify-center gap-4 bg-gray-800 rounded-md hover:bg-gray-700"
        >
          <img height="30" width="30" src="/google.svg" alt="Google" />
          Continue with Google
        </button>

        <button
          className="w-full max-w-md py-3 flex items-center justify-center gap-4 bg-gray-800 rounded-md hover:bg-gray-700"
        >
          <img height="30" width="30" src="/apple.svg" alt="Apple" />
          Continue with Apple
        </button>

        <p className="text-gray-400">OR</p>

        <form className="flex flex-col w-full max-w-md gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="py-3 px-4 bg-gray-800 text-white rounded-md outline-none w-full"
            placeholder="Enter your Name"
            autoComplete="name"
            required
          />

          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="py-3 px-4 bg-gray-800 text-white rounded-md outline-none w-full"
            placeholder="Email"
            autoComplete="email"
            required
          />

          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="py-3 px-4 bg-gray-800 text-white rounded-md outline-none w-full"
            placeholder="Password"
            autoComplete="new-password"
            required
            minLength={6}
          />

          <button
            type="submit"
            className="w-full py-3 mt-2 text-center rounded-md bg-gradient-to-br from-[#0A80ED] to-black hover:opacity-90 font-medium"
          >
            Join In
          </button>
        </form>
      </div>
    </div>
  );
}
