import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom"
//import component
const Home = React.lazy (() => import("./components/Home"))
const FakultasList = React.lazy (() => import("./components/Fakultas/List"))
const ProdiList = React.lazy (() => import("./components/Prodi/List"))
const MahasiswaList = React.lazy (() => import("./components/Mahasiswa/List"))

function App() {

  return (
    <Router>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/fakultas" className="nav-link">Fakultas</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/prodi" className="nav-link">Prodi</NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/mahasiswa" className="nav-link">Mahasiswa</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/fakultas" element={<FakultasList />} />
        <Route path="/prodi" element={<ProdiList />} />
        <Route path="/mahasiswa" element={<MahasiswaList />} />
      </Routes>
    </Router>
  )
}

export default App
