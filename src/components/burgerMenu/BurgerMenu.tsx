
import LinkNavbarList from "../linkNavbarList/LinkNavbarList.tsx";

import c from "./burgerMenu.module.css";

type BurgerMenuType = {
    stateBurger: boolean
    burgerCallback: (item: boolean) => void
}

const BurgerMenu = ({stateBurger, burgerCallback}: BurgerMenuType) => {

    const burgerMenuClass = stateBurger ? `${c.burgerMenu} ${c.active}` : c.burgerMenu

    return (
        <div className={burgerMenuClass}>
            <span onClick={() => burgerCallback(false)} className={c.close}>&#10006;</span>
            <LinkNavbarList position={'vertical'} stateBurger={stateBurger}/>
        </div>
    );
};

export default BurgerMenu;