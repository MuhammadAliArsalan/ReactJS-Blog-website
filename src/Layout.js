import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
    return (
        <div className="App">
            <Header title="React JS Blog" />
            <Nav search={search} setSearch={setSearch} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout

/*The Layout component serves as a template for the entire app. It ensures that the Header,
Nav, and Footer stay visible across all pages, while the main content for each route is 
rendered using the Outlet.
 */