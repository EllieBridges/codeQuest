import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Quiz from "./Quiz";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoutes";
import NotFound from "./NotFound";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout />}>
          <Route path='home' element={<ProtectedRoute>< Home /></ProtectedRoute>} />
          <Route path='login' element={<Login />} />
          <Route path='quiz' element={<ProtectedRoute>< Quiz /></ProtectedRoute>} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

