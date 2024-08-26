import { Outlet, useLocation } from 'react-router-dom'

import Header from '../header/Header'
import Footer from '../footer/Footer'
import AdminNav from "../../admin/AdminNav";


const Layout = () => {

  const location = useLocation()

  return (
    <>

      {
        location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />
      }

      
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout