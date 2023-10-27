

import c from './burger.module.css'

type BurgerType = {
    stateBurger: boolean
    burgerCallback: (item: boolean) => void
}

const Burger = ({stateBurger, burgerCallback}:BurgerType) => {


    return (
        <div onClick={() => burgerCallback(!stateBurger)} className={c.burger}>
            <span className={c.burgerItem}></span>
            <span className={c.burgerItem}></span>
            <span className={c.burgerItem}></span>
        </div>
    );
};

export default Burger;