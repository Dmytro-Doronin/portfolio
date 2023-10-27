
import c from './linkNavbarList.module.css';

type LinkNavbarListType = {
    stateBurger: boolean
    position: string
}

const LinkNavbarList = ({ position}: LinkNavbarListType) => {

    // const vertical = position === 'vertical'
    //     ? `${c.menuList} ${c.menuListBurger}`
    //     : c.menuList

    const listStyle = position === 'vertical'
        ? `${c.menuList} ${c.menuListBurger}`
        : c.menuList



    return (
        <nav className={c.nav}>
            <ul className={listStyle}>
                <li className={c.menuItem}>
                    <a href="#" className={c.menuLink}>Main</a>
                </li>
                <li className={c.menuItem}>
                    <a href="#" className={c.menuLink}>Technologies</a>
                </li>
                <li className={c.menuItem}>
                    <a href="#" className={c.menuLink}>Projects</a>
                </li>
                <li className={c.menuItem}>
                    <a href="#" className={c.menuLink}>Contacts</a>
                </li>
            </ul>
        </nav>

    );
};

export default LinkNavbarList;