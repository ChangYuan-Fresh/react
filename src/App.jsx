import { Outlet } from 'react-router';
import Navbar from './assets/layout/Navbar';
import Footer from './assets/layout/Footer'

// const baseUrl = import.meta.env.VITE_BASE_URL;
// const apiPath = import.meta.env.VITE_API_PATH;


function App() {


  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
