import c from './button.module.css'
// import {ReactNode} from "react";

// type ButtonPropsType = {
//     children: ReactNode
// }

const Button = ({children, props}: any) => {
    return (
        <button className={c.mainButton} {...props}>
            {children}
        </button>
    );
};

export default Button;