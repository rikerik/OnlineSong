import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserList from "../components/UserList";
import UserDetail from "../components/UserDetail";
import LogoutButton from "../components/common/Logout";

// Component to handle routing for user related pages
const UserPage = () => {
  return (
    <div>
      <LogoutButton />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
};

export default UserPage;
