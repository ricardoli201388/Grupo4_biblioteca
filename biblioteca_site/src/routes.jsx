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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="Cadastro" element={<Cadastro/>}/>
            <Route path="Editar" element={<Editar/>}/>
        </Route>
        
    )
)

export default function routes() {
    return <RouterProvider router={router}/>
}