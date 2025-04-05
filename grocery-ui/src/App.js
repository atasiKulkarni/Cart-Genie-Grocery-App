import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./utils/PrivateRoute"; // Remove {} when importing default exports
// import { Header } from "./components/Header";
import { GrocerySection } from "./components/GrocerySection";
import { RegistrationForm } from "./components/RegistrationForm";
// import { LoginForm } from "./components/LoginForm";
import { Login } from "./components/login/Login";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          {/* Public Routes */}
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />

          {/* Private Routes */}
          {/* <Route element={<PrivateRoute />}> */}
            <Route path="/" element={<GrocerySection />} />
            <Route path="/home" element={<GrocerySection />} />
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
