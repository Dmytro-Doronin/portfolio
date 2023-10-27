import NavBar from "../../components/navBar/NavBar";
import Photo from "../../components/photo/Photo";
import Button from "../../components/ui/button/Button";

import c from './previewPage.module.css'

const PreviewPage = () => {
    return (
        <div className={c.previewPage}>
            <NavBar/>
            <div className={c.infoBlock}>
                <div className={c.aboutBlock}>
                    <h1 className={c.respect}>HI, MY NAME IS DMYTRO</h1>
                    <div className={c.textBlock}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam amet, consequuntur
                        dolorum enim fugiat iste itaque labore laudantium nam nobis obcaecati officia perspiciatis quasi
                        similique suscipit voluptate.

                    </div>
                    <Button>My projects</Button>
                </div>
                <div className={c.photo}>
                    <Photo/>
                </div>
            </div>
        </div>
    );
};

export default PreviewPage;