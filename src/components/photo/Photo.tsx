import MyPhoto from '../../images/IMG_E0445.jpg'

import c from './photo.module.css'

const Photo = () => {
    return (
        <div className={c.photoBack}>
            <img className={c.myPhoto} src={MyPhoto} alt="my-photo"/>
        </div>
    );
};

export default Photo;