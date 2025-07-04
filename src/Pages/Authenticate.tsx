import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Authenticate: React.FC = () => {
  return (
    <div className="min-h-screen font-[Inter] bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center mr-3 text-white font-bold">
              E-AI
            </div>
            <h1 className="text-2xl font-bold text-gray-800">EcoSense AI</h1>
          </div>
          <div className="hidden md:block">
            <span className="text-sm text-gray-500">
              Sustainable Waste Management Platform
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Welcome to EcoSense AI
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Choose your portal to help transform waste management in Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Admin Portal */}
          <a
            href="/Admin"
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-red-100 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Admin Portal
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Access administrative tools, reports, and system management
                features.
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <span className="text-xs font-medium text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full">
                Restricted Access
              </span>
            </div>
          </a>

          {/* User Dashboard */}
          <a
            href="/User"
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-green-100 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  User Dashboard
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Report waste incidents, track your submissions, and redeem
                rewards.
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full">
                Login Required
              </span>
            </div>
          </a>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to make a difference?
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-6">
            Join thousands of Kenyans already contributing to cleaner
            communities through EcoSense AI.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
            >
              Download App
            </a>
            <a
              href="/User"
              className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:order-2 space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>

            {/* Copyright */}
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} EcoSense AI. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Authenticate;