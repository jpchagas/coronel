import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MetricHistory from "./pages/MetricHistory";
import Settings from "./pages/Settings";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Splash user={user} />} />

      <Route path="/login" element={<Login onLogin={setUser} />} />

      {/* Protected Home Routes */}
      <Route
        path="/home"
        element={
          user ? (
            <Home user={user} onLogout={() => setUser(null)} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      >
        {/* Nested pages appear inside <Outlet /> */}
        <Route index element={<h2>Dashboard em breve</h2>} />
        <Route path="history" element={<MetricHistory />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
