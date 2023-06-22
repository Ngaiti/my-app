import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { AuthContext } from './AuthContext';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ErrorPage from './pages/Error';
import RequireAuth from './components/RequireAuth';
import MainPage from './pages/MainPage';
import useLocalStorage from 'use-local-storage';

function Layout() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Home :3</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

function App() {
  const [token, setToken] = useLocalStorage("token", null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
            <Route
              element={
                <RequireAuth>
                  <MainPage />
                </RequireAuth>
              }
              path="/mainpage" />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
