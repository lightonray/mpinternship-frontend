import './App.css';
import Blogs from './components/Blogs';
import Calculator from './components/Calculator';
import Home from './components/Home'
import BlogArticle from './components/BlogArticle';
import ContactForm from './components/Contact';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/calculator">CALCULATOR</Link>
            </li>
            <li>
              <Link to="/blogs">BLOGS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/article/:index" element={<BlogArticle />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
