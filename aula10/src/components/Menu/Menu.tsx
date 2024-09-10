import { Link } from "react-router-dom";
import { MenuItem, MenuList, Nav } from "../../style/styles";

export default function Menu(){
    return(
        <Nav>
            <MenuList>
                <MenuItem><Link to="/">Home</Link></MenuItem> 
                <MenuItem><Link to="/produtos">Produtos</Link></MenuItem>
                <MenuItem><Link to="/users">Usuários</Link></MenuItem>
            </MenuList>
        </Nav>
    );
}