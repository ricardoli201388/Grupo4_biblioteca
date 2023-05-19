import { Container, Logo, DivHeader, Text } from "./styles";
import logoIcon from "../../assets/logo.png"


function Header(){

return (
    <Container>
        <Logo src={logoIcon}/>
        
        <DivHeader>
            <Text>Login</Text> 
            <Text>Cadastre-se</Text> 
        </DivHeader> 
    </Container>
)
}
export default Header;