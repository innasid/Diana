import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DisplayData from "./DisplayData";
import InsertData from "./InsertData";
import UpdateData from "./UpdateData";
import DeleteData from "./DeleteData";
function RouterDemo() {
  return (
    <div>
      <div className="container">
        <Router>
          <nav className="container col d-flex navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="nav-link badge bg-primary px-3 py-2 m-4" to="/">
              Display
            </Link>
            <Link
              className="nav-link badge bg-primary px-3 py-2 m-4"
              to="/insert"
            >
              Insert
            </Link>
            <Link
              className="nav-link badge bg-primary px-3 py-2 m-4"
              to="/update"
            >
              Update
            </Link>
            <Link
              className="nav-link badge bg-primary px-3 py-2 m-4"
              to="/delete"
            >
              Delete
            </Link>
          </nav>
          <Routes>
            <Route exact path="/" element={<DisplayData />}></Route>
            <Route path="/insert" element={<InsertData />}></Route>
            <Route path="/update" element={<UpdateData />}></Route>
            <Route path="/delete" element={<DeleteData />}></Route>
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
export default RouterDemo;