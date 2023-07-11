import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LogInPage'
import SignupPage from './pages/SignupPage.'
import Format from './Format'
import axios from 'axios'

// axios not working
axios.defaults.baseURL = 'http://localhost:4000';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Format />}>
        <Route index element={<IndexPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Route>
    </Routes>

  )
}

export default App
