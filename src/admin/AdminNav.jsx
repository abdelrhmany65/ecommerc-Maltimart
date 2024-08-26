import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { UserAuth } from "../hooks/UserAuth";
import { IoIosNotifications } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import Logo from "../assets/images/eco-logo.png";
import './style.css';


const admin__nav =[

  {
    display: 'Dashboard',
    path: 'dashboard'
  },
  {
    display: 'All-products',
    path: 'dashboard/all-product'
  },
  {
    display: 'Orders',
    path: 'dashboard/orders'
  },
  {
    display: 'Users',
    path: 'dashboard/users'
  },

]

const AdminNav = () => {
  const { user } = UserAuth();

  return (
    <>
    {/* top-header  */}
      <header className='top-header p-3'>
          <nav className="navbar">
            <div className="container">
              {/* logo  */}
              <Link className="navbar-brand" to="/">
                <div className="logo d-flex align-items-center">
                  {/* <img src={Logo} alt="Logo"/> */}
                  <span>
                    <h1 className='fs-6 text-light'>Maltimart</h1>
                  </span>
                </div>
              </Link>
              {/* search  */}
              <form className="d-flex search-nav" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-light" type="submit">Search</button>
              </form>
              {/* icons  */}
              <div className="icons fs-4">
                <div>
                  <span><IoIosNotifications /></span>
                  <span><IoSettings /></span>
                  <span className='scal'>
                    {user ? (
                      <img src={user && user.photoURL} alt="User" />
                    ) : (
                      <span>No User</span>
                    )}
                    <span>{user?.displayName}</span>
                  </span>
                </div>
              </div>
            </div> 
          </nav>
        </header>
        {/* nav  */}
        <section className='row__nav p-2'>
          <Container>
            <Row>
              <ul className="admin__nav d-flex align-items-center justify-content-around">
                {admin__nav.map((item, index) => (
                  <li key={index} >
                    <Link to={item.path} >{item.display}</Link>
                  </li>
                ))}
              </ul>
            </Row>
          </Container>
        </section>
    </>
  );
}

export default AdminNav;
