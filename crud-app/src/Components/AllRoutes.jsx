import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import AddUserForm from "./AddUserForm";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/addData" element={<AddUserForm />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
