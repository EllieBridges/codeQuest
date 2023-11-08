import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Layout from "./Layout";
import Home from "./Home";
import Quiz from "./Quiz";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoutes";
import NotFound from "./NotFound";

export default function App() {

  const [isAuth, setIsAuth] = useState(() => sessionStorage.getItem('userToken') || false);

  const setAuth = (value) => {
    setIsAuth(value);
  }

  useEffect(() => {
    localStorage.setItem("auth", isAuth);
  }, [isAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout />}>
          <Route path='home'
            element={isAuth
              ? <Home />
              : <Navigate to="login" replace />
            } />
          <Route path='login' element={<Login />} setAuth={setAuth} />
          <Route path='quiz' element={<ProtectedRoute>< Quiz /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

