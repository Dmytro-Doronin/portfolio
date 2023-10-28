// import c from './button.module.css'
// // import {ReactNode} from "react";
//
// type ButtonPropsType = {
//     children: ReactNode
// }
//
// const Button = ({children, props}: any) => {
//     return (
//         <button className={c.mainButton} {...props}>
//             {children}
//         </button>
//     );
// };
//
// export default Button;

import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.css'

export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    children: ReactNode
    className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
    const { as: Component = 'button', ...rest } = props

    return (
        <Component className={s.mainButton} {...rest} />
    )
}

export default Button