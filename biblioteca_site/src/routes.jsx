import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Cadastro from "./Pages/Cadastro/cadastro";
import Editar from "./Pages/Editar/editar";
import Dados from "./Pages/Dados/dados";
import { AppLayout } from "./Layouts";
import useAuthStore from "./stores/auth";

function RotasPrivadas() {
  const token = useAuthStore((state) => state.token);

  if (token) return <Outlet />;

  return <Navigate to="/login" replace />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route element={<RotasPrivadas />}>
          <Route path="Dados" element={<Dados />} />
          <Route path="Editar" element={<Editar />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Cadastro" element={<Cadastro />} />
      </Route>
    </Route>
  )
);

export default function routes() {
  return <RouterProvider router={router} />;
}
