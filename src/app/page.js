"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // Check if a token exists in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to My Next.js App
      </h1>
      <p className="text-center mb-8">
        This is the homepage of your application. Navigate to different sections
        using the links below.
      </p>
      <div className="flex justify-center space-x-4">
        <Link href="/products">
          <span className="p-2 bg-indigo-500 text-white rounded">Products</span>
        </Link>
        <Link href="/cart">
          <span className="p-2 bg-green-500 text-white rounded">Cart</span>
        </Link>
        <Link href="/recipes">
          <span className="p-2 bg-yellow-500 text-white rounded">Recipes</span>
        </Link>
        <Link href="/users">
          <span className="p-2 bg-purple-500 text-white rounded">Users</span>
        </Link>
        <Link href="/posts">
          <span className="p-2 bg-pink-500 text-white rounded">Posts</span>
        </Link>
        {!isLoggedIn ? (
          <Link href="/auth/login">
            <span className="p-2 bg-blue-500 text-white rounded">Login</span>
          </Link>
        ) : (
          <>
            <Link href="/profile">
              <span className="p-2 bg-teal-500 text-white rounded">
                Profile
              </span>
            </Link>
            <span className="text-red-500 cursor-pointer" onClick={logout}>
              Log out
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
