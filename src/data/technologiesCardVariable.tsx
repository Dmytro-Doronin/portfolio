import GitSvg from '../assets/TechnologiesSvg/GitSvg.tsx'
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
        id: '2',
        name: 'JS',
        Img: JsSvg
    },
    {
        id: '3',
        name: 'REACT',
        Img: ReactSvg
    },
    {
        id: '7',
        name: 'REDUX',
        Img: ReduxSvg
    },
    {
        id: '4',
        name: 'CSS',
        Img: CssSvg
    },
    {
        id: '5',
        name: 'GIT',
        Img: GitSvg
    },
    {
        id: '6',
        name: 'TYPESCRIPT',
        Img: TypescriptSvg
    },


]

