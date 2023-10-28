// import HTML from '../images/svg/html.svg'
// import CSS from '../images/svg/css.svg'
// import JS from '../images/svg/js.svg'
// import GIT  from '../images/svg/git.svg'
// import TYPESCRIPT  from '../images/svg/typescript.svg'
// import REDUX  from '../images/svg/redux.svg'
import GitSvg from '../assets/TechnologiesSvg/GitSvg.tsx'
import HTMLSvg from '../assets/TechnologiesSvg/HTMLSvg.tsx'
import JsSvg from '../assets/TechnologiesSvg/JsSvg.tsx'
import ReduxSvg from '../assets/TechnologiesSvg/ReduxSvg.tsx'
import TypescriptSvg from '../assets/TechnologiesSvg/TypescriptSvg.tsx'
import CssSvg from '../assets/TechnologiesSvg/CssSvg.tsx'
import ReactSvg from '../assets/TechnologiesSvg/ReactSvg.tsx'
import {ForwardRefExoticComponent, MemoExoticComponent, RefAttributes, SVGProps} from "react";

export type SvgType = MemoExoticComponent<ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>>

type TechnoVariablesType = {
    id: string
    name: string
    Img: SvgType
}

export const technologiesCardVariable:TechnoVariablesType[] = [
    {
        id: '1',
        name: 'HTML',
        Img: HTMLSvg

    },
    {
        id: '2',
        name: 'CSS',
        Img: CssSvg
    },
    {
        id: '3',
        name: 'JS',
        Img: JsSvg
    },
    {
        id: '4',
        name: 'GIT',
        Img: GitSvg
    },
    {
        id: '5',
        name: 'TYPESCRIPT',
        Img: TypescriptSvg
    },
    {
        id: '6',
        name: 'REDUX',
        Img: ReduxSvg
    },
    {
        id: '7',
        name: 'REACT',
        Img: ReactSvg
    },

]

