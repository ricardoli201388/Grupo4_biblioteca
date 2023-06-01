import { Container, Titulo, Caixa_texto, Texto, Botao, Form, Campo, Label, Input, Button} from "./styles";
import { useState } from 'react'
import api from '../../services/api'
import jwtDecode from "jwt-decode";
import { useAuthStore } from "../../stores/auth";
import { useNavigate } from "react-router";


function Login(){
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")
const [carregando, setCarregando] = useState(false);
const token = useAuthStore((state) => state.token);
const usuario = useAuthStore((state) => state.usuario);
const setToken = useAuthStore((state) => state.setToken );
const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({ email, senha });
    try {
      setCarregando(true);
      const res = await api.post("/login", { email, senha });
      const { token } = res.data;
      
      setToken(token);
      navigate('/')
      //console.log(res);
    } catch (error) {
      console.error(erro);
      alert(erro.reponse.data.message);
    } finally {
      setCarregando(false);
    }
  };

  if (carregando)
    return (
      <Container>
        <h1>Carregando...</h1>
      </Container>
    );

  return (
    <Container>
      <Titulo>Login</Titulo>
      <Form onSubmit={handleSubmit}>
        <Campo>
          <Label htmlFor="email">
            E-mail:
            <Input
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
        </Campo>
        <Campo>
          <Label htmlFor="senha">
            Senha:
            <Input
              type="password"
              id="senha"
              required
              onChange={(e) => setSenha(e.target.value)}
            />
          </Label>
        </Campo>
        <Button type='submit'>Login</Button> 
    </Form>
    
    </Container>
)
}
export default Login;
