import {Botaocadastrostyles} from "./styles"

function Botaocadastro(props) {
    return (
    <div>
        <Botaocadastrostyles onClick={props.onClick}> 
            Cadastre-se
        </Botaocadastrostyles>
    </div>  
    )
}

export default Botaocadastro;