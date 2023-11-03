import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';



function NavBar() {
return (
    <Navbar expand="lg" className="header">
        <Container fluid>
            <NavLink to="/"> <div className='brand'><Navbar.Brand>Mi Tienda</Navbar.Brand></div></NavLink> 
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="m-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <NavLink className="nav-link" to="/categoria/zapatillas">Zapatillas</NavLink>
                <NavLink className="nav-link" to="/categoria/remeras">Remeras</NavLink>
                <NavLink className="nav-link" to="/categoria/buzos">Buzos</NavLink>
                </Nav>
                <div className="cart"><CartWidget /></div>
            </Navbar.Collapse>
            
        </Container>
    </Navbar>
)
}

export default NavBar