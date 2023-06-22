import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import { AuthContext } from './AuthContext';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ErrorPage from './pages/Error';
import RequireAuth from './components/RequireAuth';
import Home from './pages/Home';
import useLocalStorage from 'use-local-storage';
import Welcome from './pages/Welcome';

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
            <Route index element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
            <Route
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
              path="/Home" />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
