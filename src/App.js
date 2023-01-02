import React from 'react'
import './App.css'
import Profile from './components/Profile'
import Form from './components/Form'
import NavBar from './components/NavBar'
import About from './components/About'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <div className="contenedorPrincipal">
        <h2>Use useLocation Hook in React</h2>
        <NavLink className="btnRutas" to="/">
          Ir Inicio
        </NavLink>
        <NavLink className="btnRutas" to="/profile/user?name=john">
          Ir a la ruta /<b>profile</b>/user?name=<b>john</b>
        </NavLink>
        <NavLink className="btnRutas" to="/perfil/user?name=peter">
          Ir a la ruta /<b>perfil</b>/user?name=<b>peter</b>
        </NavLink>
        <Profile />

        <div>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/home" element={<About />}></Route>
      </Routes>

      </div>
    </BrowserRouter>
  )
}