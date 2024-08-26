import React, { useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';

import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

import "./header.css";
import Logo from "../../assets/images/eco-logo.png";
import Usericon from "../../assets/images/user-icon.png";
import UserAuth from "../../hooks/UserAuth";
import { toast } from 'react-toastify';

const nav__link = [
  { path: '/', display: 'Home' },
  { path: 'shop', display: 'Shop' },
  { path: 'cart', display: 'Cart' },
];

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const navigate = useNavigate();
  const { user } = UserAuth();
  const profileActionRef = useRef(null);

  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  const logout = () => {
    signOut(auth).then(() => {
      toast.success('log out')
      navigate('/');  
    }).catch(error => {
      toast.error(error.message)
      
    });
  };

  useEffect(() => {
    stickyHeader();
    return () => window.removeEventListener('scroll', stickyHeader);
  });

  const navigationToCart = () => {
    navigate('/cart');
  };

  const toggleProfile = () => profileActionRef.current.classList.toggle('show__profile');

  return (
    <header className='header' ref={headerRef}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="logo d-flex align-items-center">
              <img src={Logo} alt="Logo" />
              <span>
                <h1 className='fs-6'>Maltimart</h1>
              </span>
            </div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-1 mb-lg-0">
              {
                nav__link.map(({ path, display }) => (
                  <li key={path} className='nav__item px-3 fw-bold'>
                    <NavLink to={path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{display}</NavLink>
                  </li>
                ))
              }
            </ul>
            <div className="nav__icon">


              <span className='cart__icon fs-3 btn-primary position-relative px-3' onClick={navigationToCart}>
                <FaCartShopping />
                <span className="count position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  {totalQuantity}
                  <span className="visually-hidden"></span>
                </span>
              </span>

              <span className='scal'>
                <img src={user ? user.photoURL : Usericon}
                  alt="user"
                  onClick={toggleProfile}
                />
              </span>

              <div className="profile"
                ref={profileActionRef}
                onClick={toggleProfile}
              >
                {
                  user ?
                    (<span onClick={logout}>Log out</span>) :
                    (<div>
                      <div>
                        <Link to="/signup">Sign up</Link>
                      </div>
                      <div>    
                        <Link to="/login">Log in</Link>
                      </div>
                      <div>    
                        <Link to="/dashboard">Dashboard</Link>
                      </div>
                    </div>)
                }
              </div>

              <span>{user?.displayName}</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
