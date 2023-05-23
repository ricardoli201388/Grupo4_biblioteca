
import Routes from "./routes"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer";
import Home from './Pages/Home/home'
import Login from './Pages/Login/login'
import Cadastro from './Pages/Cadastro/cadastro'

function App() {

  return (
    <>
      <Header/>
      <Routes/>
      <Footer/>
    </>
  );
}

export default App