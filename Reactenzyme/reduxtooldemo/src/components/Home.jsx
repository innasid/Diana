import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BillProduct from "./BillProduct";
import Logout from "./Logout";
import SelectProduct from "./SelectProduct";

function Home() {
  return (
    <div className="container">
      <div>
        <Router>
          <nav className="container col d-flex navbar navbar-expand-lg navbar-light bg-dark">
            <Link
              className="nav-link badge bg-primary px-3 py-2 m-4"
              to="/purchase"
            >
              Purchase
            </Link>

            <Link
              className="nav-link badge bg-primary px-3 py-2 m-4"
              to="/payment"
            >
              Payment
            </Link>
            <Link
              className="nav-link badge bg-primary px-3 py-2 m-4"
              to="/logout"
            >
              Logout
            </Link>
          </nav>
          <Routes>
            <Route path="/purchase" element={<SelectProduct />}></Route>
            <Route path="/payment" element={<BillProduct />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
          </Routes>
        </Router>
      </div>
      <main></main>
      <footer className="container col d-flex navbar navbar-expand-lg navbar-light bg-dark">
        <div className="text-white ">Footer</div>
      </footer>
    </div>
  );
}

export default Home;