import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext"; // Correct path
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  const { currentUser } = useContext(AuthContext); // Accessing current user from context

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<Home />} />
        {/* Redirect to home if already logged in */}
        <Route path="/register" element={currentUser ? <Navigate to="/" /> : <Register />} />
        {/* Redirect to home if already logged in */}
        <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
        {/* Display post details */}
        <Route path="/post/:id" element={<Single />} />
        {/* Redirect to login if not logged in */}
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        {/* Redirect to login if not logged in */}
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default function AppWrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
