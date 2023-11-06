import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import Login from "./Login";
//import { Switch, Route } from "react-router-dom";
import About from "./About";
import Purchase from "./Purchase";
import Home from "./Home";
function RouterDemo() {
  return (
    <div>
      <div className="container">
        <BrowserRouter>
          <nav className="container col-d felx justify-content-evenly">
            <h1>Menu</h1>
            <Link className="nav-link badge bg-primary" to="/">
              Home
            </Link>
            <Link className="nav-link badge bg-primary" to="/Purchase">
              Purchase
            </Link>
            <Link className="nav-link badge bg-primary" to="/About">
              About
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Purchase" element={<Purchase />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default RouterDemo;