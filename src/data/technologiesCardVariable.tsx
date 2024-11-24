import GitSvg from '../assets/TechnologiesSvg/GitSvg.tsx'
import JsSvg from '../assets/TechnologiesSvg/JsSvg.tsx'
import TypescriptSvg from '../assets/TechnologiesSvg/TypescriptSvg.tsx'
import CssSvg from '../assets/TechnologiesSvg/CssSvg.tsx'
import NgRxSvg from '../assets/TechnologiesSvg/NgRxSvg.tsx'
import {ForwardRefExoticComponent, MemoExoticComponent, RefAttributes, SVGProps} from "react";
import AngularSvg from "../assets/TechnologiesSvg/AngularSvg.tsx";

export type SvgType = MemoExoticComponent<ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>>

type TechnoVariablesType = {
    id: string
    name: string
    Img: SvgType
}

export const technologiesCardVariable:TechnoVariablesType[] = [
    {
        id: '2',
        name: 'JS',
        Img: JsSvg
    },
    // {
    //     id: '3',
    //     name: 'REACT',
    //     Img: ReactSvg
    // },
    // {
    //     id: '4',
    //     name: 'REDUX',
    //     Img: ReduxSvg
    // },
    {
        id: '8',
        name: 'ANGULAR',
        Img: AngularSvg
    },
    {
        id: '9',
        name: 'NGRX',
        Img: NgRxSvg
    },
    {
        id: '5',
        name: 'CSS',
        Img: CssSvg
    },
    {
        id: '6',
        name: 'GIT',
        Img: GitSvg
    },
    {
        id: '7',
        name: 'TYPESCRIPT',
        Img: TypescriptSvg
    },

]

