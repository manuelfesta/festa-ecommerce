import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
  return (
    <Navbar expand="lg" className="header">
        <Container fluid>
            <Navbar.Brand className="brand" href="./">Mi Tienda</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="m-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Nav.Link href="#">Categoria 1</Nav.Link>
                <Nav.Link href="#">Categoria 2</Nav.Link>
                <Nav.Link href="#">Categoria 3</Nav.Link>
                </Nav>
                <div className="widgets">
                    <CartWidget />
                </div>
            </Navbar.Collapse>
            
        </Container>
    </Navbar>
);
}

export default NavBar