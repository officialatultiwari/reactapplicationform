import { Link, Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
        <nav>
          {/* <Link to="/">Home</Link> */}
            <Link to="Home">Home</Link >||
            <Link to="Insert">Insert</Link>||
            <Link to="Display">Dispaly</Link>||
            <Link to="Serch">Serch</Link>||
            <Link to="Update">Update</Link>
            <Link to="EditData">EditData</Link>
            <hr size="3" color="black" />
        </nav>
        <main>
            <Outlet />
            <hr size="3" color="orange" />
            www.myemploye.com
        </main>
        </>
    )
}
export default Layout;