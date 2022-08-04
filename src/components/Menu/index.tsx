import { Container, Header, MenuContainer, MenuHomeButton, MenuItem, MenuItemIcon, MenuItemText, MenuLink } from "./styles";

import { AiOutlineHome } from "react-icons/ai";
import { menuData } from "./data";
import { MenuBarsContainer } from "../MenuNav/styles";
import { FaBars } from "react-icons/fa";

interface MenuProps {
    fn(): void,
}

/**
 * 
 * @param fn - Function that will handle the bars icon click 
 * @returns A menu component
 */
function Menu({ fn } : MenuProps) {

    return (

        <Container>
            <Header>
                <MenuBarsContainer style={{marginRight: '25px'}} onClick={() => fn()}>
                    <FaBars/>
                </MenuBarsContainer>
                Nebulla
            </Header>
            <MenuContainer>
                <MenuItem style={{marginBottom: '25px'}}>
                    <MenuHomeButton to={'/'}>
                        <MenuItemIcon>
                            <AiOutlineHome/>
                        </MenuItemIcon>
                        <MenuItemText>
                            Home
                        </MenuItemText>
                    </MenuHomeButton>
                </MenuItem>
                {
                    menuData.map(( item ) => {
                        return (
                            <MenuItem key={item.path}>
                                <MenuLink to={item.path}>
                                    <MenuItemIcon>
                                        {item.icon} 
                                    </MenuItemIcon>
                                    <MenuItemText>
                                        {item.title}
                                    </MenuItemText>
                                </MenuLink>
                            </MenuItem>

                        );
                    })
                }
            </MenuContainer>
        </Container>
    );
};

export default Menu;