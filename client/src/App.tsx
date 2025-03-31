
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { SendMoney } from './pages/SendMoney'
import LandingPage from './pages/Home'


function App() {


  return (
    <>
      {/* <h1 className='bg-red-500 rounded-2xl text-black font-bold p-4'>Hi there</h1>
      <h2>cool</h2> */}
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/signup' element={<Signup />}/>
            <Route path='/signin' element={<Signin />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/send' element={<SendMoney />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
