import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header(){
   
    return(<>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to='/posts'>Posts</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    
    </>)
}
export default Header