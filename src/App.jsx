import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
