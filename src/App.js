import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout.js";
import Cards from "./pages/Cards/Cards.js";
import Home from "./pages/Home/Home.js";
import Blogs from "./pages/Blogs/Blogs.js";
import Contact from "./pages/Contact/Contact.js";
import NoPage from "./pages/NoPage/NoPage.js";
import List from "./pages/List/List.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Cards />} />
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="list" element={<List />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);