import { Container, Logo, Menu, MenuHomeButton, MenuItem, MenuItemIcon, MenuItemText, MenuLink } from "./styles";
import useMenuData from "./data";
import { AiOutlineHome } from "react-icons/ai";


function SideNavBar() {

    
    const { baseData: data } = useMenuData();

    return (
        <Container>
            <Logo>
                Nebulla
            </Logo>
            <Menu>
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
                    data?.map(( item ) => {
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
            </Menu>
        </Container>
    )
};

export default SideNavBar;