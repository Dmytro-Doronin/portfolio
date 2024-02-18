import todo2 from '../images/todo2.png'
import cards from '../images/cards.png'

type ProjectCardDataType = {
    img: string
    title: string
    text: string
    linkOnGithub: string,
    linkOnDemo: string,
}


export const projectCardData: Array<ProjectCardDataType> = [
    {
        img: todo2,
        title: 'Todolist',
        linkOnGithub: 'https://github.com/Dmytro-Doronin/ToDoListWithVite',
        linkOnDemo: 'https://to-do-list-with-vite-weld.vercel.app/',
        text: 'SPA for managing to-do lists and their items. Technologies: React, Redux, Material-Ui, TS.'
    },
    {
        img: cards,
        title: 'Quiz cards',
        linkOnGithub: 'https://github.com/Dmytro-Doronin/flash-cards',
        linkOnDemo: 'https://flash-cards-ruby-two.vercel.app/',
        text: 'This is a project - Learning by Cards. Technologies: React, Redux, RTK-Query, SCSS, TS.'
    },


]