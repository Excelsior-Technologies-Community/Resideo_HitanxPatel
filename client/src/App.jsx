import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";

function NotFound() {
  return <h1>404 Page Not Found</h1>;
}

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<AboutUs />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;