import Header from '../header'
const Layout = ({children}) => {
    return(
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    )
}
export default Layout;