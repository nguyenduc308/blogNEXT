import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
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
        <header className="header">
            <div className="grid wide">
                <nav className="navbar">
                    <div className="header__logo">
                        <Link href="/blogs">
                            <a className="header__logo-title">{APP_NAME}</a>
                        </Link>
                    </div>
                    <ul className="header__menu">
                            <li className="header__menu-item">
                                <Link href="/">
                                    <a className="header__menu-link">Trang chủ</a>
                                </Link>
                            </li>
                            <li className="header__menu-item">
                                <Link href="/">
                                    <a className="header__menu-link">Thành viên</a>
                                </Link>
                            </li>
                            <li className="header__menu-item">
                                <Link href="/">
                                    <a className="header__menu-link">Liên hệ</a>
                                </Link>
                            </li>
                        {
                            !isAuth() && (
                                <>
                                <li className="header__menu-item">
                                    <Link href="/signup">
                                    <a className="header__menu-link">Đăng ký</a>
                                    </Link>
                                </li>
                                <li className="header__menu-item">
                                    <Link href="/signin">
                                    <a className="header__menu-link">Đăng nhập</a>
                                    </Link>
                                </li>
                                </>
                            )
                        }
                        {
                            isAuth() && <li className="header__menu-item">
                                <span className="header__menu-link">
                                    {`Hi, ${isAuth().name}`}
                                </span>
                                <ul className="header__childmenu">
                                    <li className="header__childmenu-item">
                                        <Link href="/user">
                                            <a className="header__childmenu-link">Profile</a>
                                        </Link>
                                    </li>
                                    {isAuth().role === 1 && <li className="header__childmenu-item">
                                        <Link href="/admin">
                                            <a className="header__childmenu-link">Admin</a>
                                        </Link>
                                    </li>}
                                    <li className="header__childmenu-item">
                                            <span 
                                            className="header__childmenu-link" 
                                            onClick={
                                                () => {
                                                    signout(()=> Router.push('/'))
                                                }
                                            }
                                            >Logout
                                            </span>
                                    </li>
                                </ul>
                            
                            
                            </li>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;