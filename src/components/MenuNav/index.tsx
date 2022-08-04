import { Container, MenuBarsContainer } from "./styles";

import { FaBars } from "react-icons/fa";
import Menu from "../Menu";
import { useState } from "react";


function MenuNav() {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prev) => prev = !prev)
    };

    return (
        <>
            <Container>
                <MenuBarsContainer onClick={toggleMenu}>
                    <FaBars/>
                </MenuBarsContainer>
            </Container>
            {
                open  && (
                    <Menu fn={toggleMenu} />
                )
            }
        </>
       
    );
};

export default MenuNav;