import './App.css';
import {
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";

import Home from './components/Home';
import ArticleDetails from './components/ArticleDetails';

function App() {
  return (
    <div className='container' >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:articleId" element={<ArticleDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
