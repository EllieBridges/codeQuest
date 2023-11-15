import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
import Login from "./Login";
import NotFound from "./NotFound";

export default function App() {
  const [isAuth, setIsAuth] = useState<string | null>("hi");

  // sessionStorage.getItem("userToken")
  // );

  // const setAuth = (value: string | null) => {
  //   setIsAuth(value);
  // };

  // useEffect(() => {
  //   localStorage.setItem("auth", isAuth);
  // }, [isAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            path="quiz"
            element={
              isAuth ? (
                <Quiz isAuth={isAuth} />
              ) : (
                <Navigate to="login" replace />
              )
            }
          />
          {/* <Route path="login" element={<Login />} setAuth={setAuth} /> */}
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
