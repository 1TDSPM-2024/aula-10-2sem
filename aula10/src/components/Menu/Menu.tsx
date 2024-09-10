import { Link } from "react-router-dom";
import "../../style/style.scss"

export default function Menu(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li> 
                <li><Link to="/produtos">Produtos</Link></li>
                <li><Link to="/users">Usuário Github</Link></li>
            </ul>
        </nav>
    );
}