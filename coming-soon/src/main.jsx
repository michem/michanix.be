import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Now from './pages/Now.jsx'
import Frameworks from './pages/Frameworks.jsx'
import Experience from './pages/Experience.jsx'
import Book from './pages/Book.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/now" element={<Now />} />
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
