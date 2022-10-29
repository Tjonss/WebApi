import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from '../components/Create'
import Login from '../components/Login'
import CasesContainer from '../components/CasesContainer'
import SingleCase from '../components/SingleCase'


const Views = () => {
  return (
    <>
      <Routes>
        <Route path='/create' element={<Create />} />
        <Route path='/cases' element={<CasesContainer />} />
        <Route path='/cases/:id' element={<SingleCase />} />
        <Route path='/login' element={<Login />}/>
      </Routes>

    </>
  )
}

export default Views