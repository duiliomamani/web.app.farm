import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import LoginButton from '../../shared/auth/login.button';

/* Files */
import logo from '../../../assets/images/logo-plant.png';

const Header = () => {
    return <header>
        <Navbar bg="success" expand="lg" className="d-none d-md-block">
            <Container fluid >
                <Nav className="justify-content-md-start justify-content-center">
                    <Nav.Item>
                        <small>
                            <Nav.Link href="mailto:info@farm.com" className="text-white">
                                <FontAwesomeIcon icon={["fas", "envelope"]} /> Contacto: info@farm.com</Nav.Link>
                        </small>
                    </Nav.Item>
                </Nav>
                <Nav className="justify-content-end list-unstyled">
                    <Nav.Link className="ms-3 text-white"><FontAwesomeIcon icon={["fab", "facebook"]} /> <span className="d-md-none d-lg-none">Facebook</span></Nav.Link>
                    <Nav.Link className="ms-3 text-white"><FontAwesomeIcon icon={["fab", "twitter"]} /> <span className="d-md-none d-lg-none">Twitter</span></Nav.Link>
                    <Nav.Link className="ms-3 text-white"><FontAwesomeIcon icon={["fab", "instagram"]} /> <span className="d-md-none d-lg-none">Instagram</span></Nav.Link>
                    <Nav.Link className="ms-3 text-white"><FontAwesomeIcon icon={["fab", "youtube"]} /> <span className="d-md-none d-lg-none">Youtube</span></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Navbar bg="white" expand="sm" className="shadow-lg">
            <Container fluid>
                <Navbar.Brand href={`${window.location.origin}`}><Image src={logo} alt="" fluid className="icon-shape" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav" className="justify-content-center">
                    <Nav>
                        <Nav.Link className="fs-6" href="#home">Inicio</Nav.Link>
                        <Nav.Link className="fs-6" href="#about">Nosotros</Nav.Link>
                        <Nav.Link className="fs-6" href="#contact">Contacto</Nav.Link>
                        <LoginButton className="d-lg-none" title="GeoTech Login" icon={["fas", "tractor"]}></LoginButton>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="d-none d-md-inline-block justify-content-end">
                    <LoginButton title="GeoTech" icon={["fas", "tractor"]}></LoginButton>
                </Nav>
            </Container>
        </Navbar>
    </header>
};

export default Header;