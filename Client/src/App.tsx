import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Quiz from "./Quiz";
import Playing from "./Playing";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoutes";
import NotFound from "./NotFound";

export default function App() {
  const [isAuth, setIsAuth] = useState(() =>
    sessionStorage.getItem("userToken")
  );

  // const setAuth = (value: string | null) => {
  //   setIsAuth(value);
  // };

  // useEffect(() => {
  //   localStorage.setItem("auth", isAuth);
  // }, [isAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="quiz"
            element={isAuth ? <Quiz /> : <Navigate to="login" replace />}
          />
          {/* <Route path="login" element={<Login />} setAuth={setAuth} /> */}
          <Route path="login" element={<Login />} />
          <Route
            path="playing"
            element={
              // protected route
              <Route>
                <Playing />
              </Route>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
