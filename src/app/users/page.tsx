"use client";

import UserList from "../components/users/UsersList";
import WithAuth from "../../utils/auth";

const UsersPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <UserList />
    </div>
  );
};

export default WithAuth(UsersPage);
