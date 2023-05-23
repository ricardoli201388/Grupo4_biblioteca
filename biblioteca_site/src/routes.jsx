import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements
} from "react-router-dom";

import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Cadastro from "./Pages/Cadastro/cadastro";
import Editar from "./Pages/Editar/editar";
import Dados from "./Pages/Dados/dados";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="Cadastro" element={<Cadastro/>}/>
            <Route path="Editar" element={<Editar/>}/>
            <Route path="Dados" element={<Dados/>}/>
        </Route>
        
    )
)

export default function routes() {
    return <RouterProvider router={router}/>
}