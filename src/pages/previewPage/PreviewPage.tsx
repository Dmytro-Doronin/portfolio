import NavBar from "../../components/navBar/NavBar";
import Photo from "../../components/photo/Photo";
// import {Button} from "../../components/ui/button/Button";
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
                        I'm frontend developer with
                        experience in creating SPA using
                        React, Redux, TypeScript. I
                        improving my skills in this direction
                        and plan to expand them with new
                        technologies, such as Next.js, Node.js.
                        I usually spend my free time
                        solving problems on Codewars and improving my
                        English. Open to your suggestions.


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