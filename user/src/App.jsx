import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LogInPage'
import SignupPage from './pages/SignupPage.'

function App() {

  return (
    <Routes>
      <Route path='/' element={<IndexPage />} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/signup' element={<SignupPage/>} />
    </Routes>
   
  )
}

export default App
