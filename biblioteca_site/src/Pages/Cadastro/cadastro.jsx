import { useState } from "react";
import { Container, Titulo, Caixa_texto, Texto, Botao, Form, Campo, Label, Input, Loading} from "./styles";
import api from "../../services/api";
import { testebook } from "../../assets";
import { Button } from "antd";



function Cadastro(){
    const [email, setEmail] = useState("");
    const [cargo, setCargo] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [status, setStatus] = useState("");
    const [carregando, setCarregando] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ email, nome, cargo, senha, status }); 
        try{
            setCarregando(true);
            const res = await api.post("/usuarios", { email, nome, cargo, senha, status });
            console.log(res.data);
        }catch(erro){
            console.error(erro);
            alert(erro.message);
        }finally{
            setCarregando(false);
        }
    };

    if (carregando)
    return (
      <Container>
        <Loading src={testebook}></Loading>
      </Container>
    );

return (
    <Container>
        <Titulo>Cadastro</Titulo> 
        <Form onSubmit={handleSubmit}>
            <Campo>
                <Label htmlFor="nome">Nome do usuário:</Label>
                <Input type="text" name="nome" id="nome" required onChange={(e) => setNome(e.target.value)}/>
            </Campo>
            <Campo>
                <Label htmlFor="cargo">Cargo:</Label>
                <Input type="text" name="cargo" id="cargo" required onChange={(e) => setCargo(e.target.value)}/>
            </Campo>
            <Campo>
                <Label htmlFor="email"> E-mail</Label>
                <Input type="email" name="email" id="email" required onChange={(e) => setEmail(e.target.value)}/>
            </Campo>
            <Campo>
                <Label htmalFor="senha">Senha:</Label>
                <Input type="text" name="senha" id="senha" required onChange={(e) => setSenha(e.target.value)}/>
            </Campo>
            <Campo>
                <Label htmlFor="status">Status:</Label>
                <Input type="text" name="status" id="status" required onChange={(e) => setStatus(e.target.value)}/>
            </Campo>
            <Botao type="submit">Cadastrar</Botao> 
   
    </Form> 

    </Container>

    
)
}
export default Cadastro;