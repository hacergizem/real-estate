import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CustomButton from '../../components/Button'

import styles from './CustomNavbar.module.css';

import logo from '../../assets/logo.png'
import hambuger from '../../assets/hamburger.svg'

function CustomNavbar() {
    return (
        <>
            <Navbar className="px-2" expand="lg">
                <Container fluid>
                    <Navbar.Brand className="d-lg-none d-flex" href="#"><img className={styles.logo} src={logo} alt="Logo"></img></Navbar.Brand>
                    <button className={`${styles.searchIcon} d-lg-none d-flex`}></button>
                    <div className="col-3 d-lg-none d-flex">
                        <CustomButton dimension="sm" theme="primaryStyle" title="Say Hello" />
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><img src={hambuger} alt="Hamburger Menu" /></Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            <Nav.Link href="#action1">Properties</Nav.Link>
                            <Nav.Link href="#action2">Articles</Nav.Link>
                            <Nav.Link href="#action2">Calculator</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                        </Nav>
                        <Nav className="me-auto my-2 my-lg-0">
                            <Navbar.Brand className="d-lg-flex d-none" href="#"><img className={styles.logo} src={logo}></img></Navbar.Brand>
                        </Nav>
                        <Form className="col-lg-3 col-12 d-flex flex-lg-row flex-column justify-content-end align-items-start align-items-lg-center">
                            <div className="d-lg-flex d-none flex-row align-items-center mx-2">
                                <input
                                    type="search"
                                    placeholder="Search"
                                    className={styles.search}
                                    aria-label="Search"
                                />
                                <button className={styles.searchIcon}></button>
                            </div>
                            <div className="d-lg-flex d-none mx-4"><CustomButton theme="primaryStyle" title="Say Hello" /></div>

                            <NavDropdown align="end" title="En" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">En</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Tr
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;