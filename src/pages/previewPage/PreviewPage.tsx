import NavBar from "../../components/navBar/NavBar";
import Photo from "../../components/photo/Photo";
// import {Button} from "../../components/ui/button/Button";

// @ts-ignore
import { Link } from "react-scroll";
import c from './previewPage.module.css'
import s from '../../components/ui/button/button.module.css'
const PreviewPage = () => {
    return (
        <div id={'PreviewPage'} className={c.previewPage}>
            <NavBar/>
            <div className={c.infoBlock}>
                <div className={c.aboutBlock}>
                    <h1 className={c.respect}>HI, MY NAME IS DMYTRO</h1>
                    <div className={c.textBlock}>
                        I'm a frontend developer with experience in creating SPAs using Angular, NgRx, and TypeScript.
                        I'm improving my skills in this field and plan to expand them by learning new technologies.
                    </div>
                    <Link  spy={true}
                           smooth={true}
                           offset={-70}
                           duration={500}
                           to={'ProjectPage'}
                           className={s.mainButton}
                    >
                        Projects
                    </Link>
                </div>
                <div className={c.photo}>
                    <Photo/>
                </div>
            </div>
        </div>
    );
};

export default PreviewPage;