import todo2 from '../images/todo2.png'
import cards from '../images/cards.png'
import blogs from '../images/blogs.png'
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
    {
        img: blogs,
        title: 'Blog Platform',
        linkOnGithub: 'https://github.com/Dmytro-Doronin/blog-frontend-Angular',
        linkOnDemo: 'https://blog-frontend-angular-eight.vercel.app/main/blogs-page',
        text: 'A modern blog platform where users can create, edit, and manage blogs and posts. The platform supports user authentication, ' +
            'file uploads (images), and dynamic content loading.' +
            'Built with Angular for the frontend, Nest.js for the backend, and MongoDB as the database. The project also integrates with AWS S3 for media storage.'
    },


]