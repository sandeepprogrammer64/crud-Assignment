import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import MainPage from './MainPage';
import Form from "./Form"

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<MainPage />}></Route>
            <Route path='/addData' element={<Form />}></Route>
            
        </Routes>
    </div>
  )
}

export default AllRoutes