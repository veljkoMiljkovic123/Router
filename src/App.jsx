import NavbarComponent from "./components/NavbarComponent"
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import {Outlet} from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {



  return (
    <div>
      <NavbarComponent />

    <Outlet />
    <ToastContainer />
    </div>
  )
}

export default App
