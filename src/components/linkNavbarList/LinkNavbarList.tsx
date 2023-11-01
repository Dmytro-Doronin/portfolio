import { Link } from "react-scroll";
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
                    <Link spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          to={'PreviewPage'}
                          className={c.menuLink}
                    >
                    Main
                    </Link>
                </li>
                <li className={c.menuItem}>
                    <Link to={'TechnologiesPage'}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className={c.menuLink}
                    >
                    Technologies
                    </Link>
                </li>
                <li className={c.menuItem}>
                    <Link  spy={true}
                           smooth={true}
                           offset={-70}
                           duration={500}
                           to={'ProjectPage'}
                           className={c.menuLink}
                    >
                    Projects
                    </Link>
                </li>
                <li className={c.menuItem}>
                    <Link  spy={true}
                           smooth={true}
                           offset={-70}
                           duration={500}
                           to={'ContactPage'}
                           href="#"
                           className={c.menuLink}
                    >Contacts
                    </Link>
                </li>
            </ul>
        </nav>

    );
};

export default LinkNavbarList;