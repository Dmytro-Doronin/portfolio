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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam amet, consequuntur
                        dolorum enim fugiat iste itaque labore laudantium nam nobis obcaecati officia perspiciatis quasi
                        similique suscipit voluptate.

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