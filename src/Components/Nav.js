import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function NavGation() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    axios.get('https://recipe-app-server-fl4d.onrender.com/auth/logout').then(()=>{
      navigate('/register')
    }).catch(err=>console.log(err))
  }
  
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Link to='/' className='text-decoration-none'><Navbar.Brand>Food Recipe</Navbar.Brand></Link>
          <Nav className="gap-4 align-items-center">
            <Link to='/create' className='text-decoration-none'>
                <Nav >Create</Nav>
            </Link>
            <Link to='/saved' className='text-decoration-none'>
                <Nav>Saved</Nav>
            </Link>
            {
              localStorage.length ? (
                <button onClick={handleLogout} className='btn'>Logout</button>
              ) : (
                <Link to='/register' className='text-decoration-none'>
                  <Nav className='text-white'>Register/Login</Nav>
                </Link>
              )
            }
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavGation;