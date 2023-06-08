import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './files/IndexPage'

function App() {

  return (
    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>
   
  )
}

export default App
