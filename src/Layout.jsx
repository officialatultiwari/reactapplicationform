import { Link, Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="Home">Home</Link>
            <Link to="Insert">Insert</Link>
            <Link to="Display">Dispaly</Link>
        </nav>
        <main>
            <Outlet />
        </main>
        </>
    )
}
export default Layout;