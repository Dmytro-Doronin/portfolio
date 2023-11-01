import facebook from '../images/facebook — копия.jpg'

type ProjectCardDataType = {
    img: string
    title: string
    text: string
}


export const projectCardData: Array<ProjectCardDataType> = [
    {
        img: facebook,
        title: 'Todolist',
        text: 'SPA for managing to-do lists and their items..'
    },



]