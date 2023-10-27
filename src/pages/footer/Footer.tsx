

import Github from '../../images/svg/github.svg'
import Linkedin from '../../images/svg/linkedin.svg'
import Instagram from '../../images/svg/instagram.svg'



import c from './footer.module.css'
import classes from '../../app/App.module.css'

const Footer = () => {
    return (
        <footer id={'Footer'} className={c.footer}>
            <div className={classes.container}>
                <div className={c.footerContainer}>
                    <div className={c.footerItem}>
                        <span>Dmytro Doronin</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className={c.footerItem}>
                        <span>Haarlem</span>
                        <span>Netherlands</span>
                    </div>
                    <div className={c.footerItem}>
                        <span>doronindmytro623@gmail.com</span>
                        <span>+31685885212</span>
                    </div>
                    <div className={c.linkWrapper}>
                        <a className={c.link} href="#">
                            <img src={Github} alt="github"/>
                        </a>
                        <a className={c.link} href="#">
                            <img src={Linkedin} alt="linkedin"/>
                        </a>
                        <a className={c.link} href="#">
                            <img src={Instagram} alt="instagram"/>
                        </a>
                    </div>
                </div>
                <hr className={c.line}/>

                <div className={c.rights}>&reg; All rights reserved 2023</div>
            </div>
        </footer>
    );
};

export default Footer;