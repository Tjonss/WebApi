import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from '../components/Create'
import Register from '../components/Register'
import SingleIssue from '../components/SingleIssue'
import IssuesContainer from '../components/IssuesContainer'


const Views = () => {
  return (
    <>
      <Routes>
        <Route path='/create' element={<Create />} />
        <Route path='/issues' element={<IssuesContainer />} />
        <Route path='/issues/:id' element={<SingleIssue />} />
        <Route path='/register' element={<Register />}/>
      </Routes>

    </>
  )
}

export default Views