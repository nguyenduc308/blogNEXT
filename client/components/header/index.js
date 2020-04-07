import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import Router from 'next/router'
import { signout, isAuth } from '../../actions/auth'
import { APP_NAME } from '../../config'
import NProgress from 'nprogress'
import '../../node_modules/nprogress/nprogress.css'
Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Link href="/">
                <a className="navbar-brand">{APP_NAME}</a>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-end" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    {
                        isAuth() && <NavDropdown title={`Hi, ${isAuth().name}`} id="basic-nav-dropdown">
                        <Link href="/user">
                                <a className="dropdown-item" role="button">Dashboard</a>
                        </Link>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#logout" onClick={
                            () => {
                                signout(()=> Router.push('/'))
                            }
                        }>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                    }
                    {
                        !isAuth() && (
                            <>
                            <Link href="/signup">
                            <a className="nav-link" role="button">Đăng ký</a>
                            </Link>
                            <Link href="/signin">
                                <a className="nav-link" role="button">Đăng nhập</a>
                            </Link>
                            </>
                        )
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
