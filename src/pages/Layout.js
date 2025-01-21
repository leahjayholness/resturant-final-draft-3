// Import necessary components from the React Router library
// 'Outlet' is used to render child routes, while 'Link' allows navigation between routes without page reload
import { Outlet, Link } from "react-router-dom";

// Import the logo image to display in the navigation bar and footer
import logo from '../images/logo.png';

// Define the 'Layout' component, which serves as a shared structure for the application's pages
const Layout = () => {
  return (
    <>
      {/* Navigation bar at the top of the page */}
      <nav className="mynavbar navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          {/* Brand logo and name, linking to the home page */}
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block" />
            Resturant Name
          </Link>
          {/* Toggle button for collapsing/expanding the menu on smaller screens */}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Collapsible navigation menu */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {/* Links for different sections of the site */}
              <li className="nav-item">
                <Link to="/" className="nav-link my-nav-link active">Menu</Link>
              </li>
              <li className="nav-item">
                <Link to="/order" className="nav-link my-nav-link active">View Order</Link>
              </li>
              <li className="nav-item">
                <Link to="/reservation" className="nav-link my-nav-link active">Reservation</Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link my-nav-link active">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Outlet renders the child route components dynamically */}
      <Outlet />

      {/* Footer at the bottom of the page */}
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          {/* Footer left section: logo and copyright */}
          <div className="col-md-4 d-flex align-items-center">
            <Link to="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <img src={logo} alt="Logo" width="30" height="30" className="bi" />
            </Link>
            <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Resturant Name, Inc</span>
          </div>
          {/* Footer right section: social media links */}
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <Link className="text-body-secondary" to="#">
                {/* SVG icon for Twitter */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 24 24">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-body-secondary" to="#">
                {/* SVG icon for Instagram */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 24 24">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                    </Link>
                </li>
            </ul>
        </footer>
      </div>
    </>
  );
};

export default Layout;








