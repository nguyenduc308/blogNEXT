import Header from '../header'
import Sidebar from '../sidebar'
const Layout = ({children}) => {
    return(
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    )
}
export default Layout;