import logo from "./assets/logo.png"
import { Divteste } from "./style"
import { useState, useEffect } from "react"
import Home from "./Pages/Home/home"
import Login from "./Pages/Login/login"
import Cadastro from "./Pages/Cadastro/cadastro"
import Routes from "./routes"

function App() {

  return (
    <div>
      
      <header>
  <div class="logo">
    <img src={logo} alt="Logo da Livraria"></img>
  </div>
  <nav class="menu">
    <button class="botaoLogin">Login</button>
    <button class="botaoCadastro">Cadastre-se</button>
    <button class="botaoLogout">Logout</button>
    <button class="botaoList"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></button>
  </nav>
  

 </header>
 <Routes/>
    </div>
  )
}

export default App
