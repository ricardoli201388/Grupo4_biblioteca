import { Container, Logo, Iconesfooter } from "./styles";
import logoIcon from "../../assets/logofooter.png"
import logos from "../../assets/icones.png"


function Footer(){

    return (
        <Container>
            <a href="https://www.instagram.com/cpe.jr/"><Iconesfooter src= {logos} /></a>
            <Logo src={logoIcon}/>
        </Container>
    )
    }
    export default Footer;