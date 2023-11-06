import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login showLinks={false} />} />
          <Route path="/register" element={<Register showLinks={true} />} /> 
          <Route path="/dashboard/:username" element={<Dashboard />} />        
        </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;