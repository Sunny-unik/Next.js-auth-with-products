"use client";

import withAuth from "../../utils/auth";
import { getUser } from "../../utils/api";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUser();
      console.log({ data });
      setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <p>{user?.username}</p>
      <p>{user?.email}</p>
    </div>
  );
};

export default withAuth(ProfilePage);
