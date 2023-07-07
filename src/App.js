import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";


export default function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path= "/" element = {< Layout />}>
            <Route index element = {< App />} />
                {/* // < Route path = "blogs" element = {<Knowledge/>} />
                //     < Route path = "contact" element = {<Contact/>} /> */}
                            </Route>
                            </Routes>
          </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);