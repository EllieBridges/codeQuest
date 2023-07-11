import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Quiz from "./Quiz";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout />}>
          <Route index element={< Home />} />
          <Route path="quiz" element={< Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

