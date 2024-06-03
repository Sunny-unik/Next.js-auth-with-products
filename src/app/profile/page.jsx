"use client";

import withAuth from "../../utils/auth";
import { getUser } from "../../utils/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUser();
        setUser(data);
      } catch (error) {
        const data = error.response?.data;
        if (data.name === "TokenExpiredError") alert(data.message);
        localStorage.removeItem("token");
        router.push("/auth/login");
      }
    };
    fetchUser();
  }, [router]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <p>{user?.username}</p>
      <p>{user?.email}</p>
    </div>
  );
};

export default withAuth(ProfilePage);
