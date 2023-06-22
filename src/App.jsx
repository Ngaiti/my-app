import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Login from './pages/Login'
import ErrorPage from './pages/Error';
import AddTodo from './pages/AddTodo';
import EditTodo from './pages/EditTodo';

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { AuthContext } from './AuthContext';
import { Container, Nav, Navbar } from 'react-bootstrap';
import RequireAuth from './components/RequireAuth';
import useLocalStorage from 'use-local-storage';
import { TodoContext } from './contexts/TodoContext';


function Layout() {
  return (
    <>
      <Navbar bg="light" variant="light" className='bg-dark text-light' >
        <Container>
          <Navbar.Brand className="text-light" href="/home">Home :3</Navbar.Brand>
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
  const [todos, setTodos] = useLocalStorage("todos", []);


  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Welcome />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<ErrorPage />} />
              <Route
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
                path="home" />
              <Route
                element={
                  <RequireAuth>
                    <AddTodo />
                  </RequireAuth>
                }
                path="add" />
              <Route
                element={
                  <RequireAuth>
                    <EditTodo />
                  </RequireAuth>
                }
                path="todo/:id" />
            </Route>
          </Routes>
        </BrowserRouter>
      </TodoContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
