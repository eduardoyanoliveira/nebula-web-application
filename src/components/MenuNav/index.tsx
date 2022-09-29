import { Container, MenuBarsContainer } from "./styles";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import { useState } from "react";
import { useMediaQuery } from "../../application/CommonHooks/useMediaQuery";
import { ScreenSizes } from "../../application/utils/screen/sizes";
import AppHeaderMenu from "../AppHeader/AppHeaderMenu";


const MenuNav: React.FC = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prev) => prev = !prev)
    };

    // Should controlls with the current size is cosidere desktop size 
    const isDesktop = useMediaQuery(`(min-width: ${ScreenSizes.xl})`);

    return (
        <>
            <Container>
                <MenuBarsContainer onClick={toggleMenu}>
                    <FaBars/>
                </MenuBarsContainer>
                {
                    !isDesktop && (<AppHeaderMenu/>)
                }
                {
                    (open || isDesktop) && <Menu fn={toggleMenu}/>
                }
            </Container>
        </>
       
    );
};

export default MenuNav;