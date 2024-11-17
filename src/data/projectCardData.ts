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
        img: cards,
        title: 'Quiz cards',
        linkOnGithub: 'https://github.com/Dmytro-Doronin/flash-cards',
        linkOnDemo: 'https://flash-cards-ruby-two.vercel.app/',
        text: 'An interactive learning platform designed to help users study and memorize information using flashcards. ' +
            'The application allows creating, editing, and organizing card sets for efficient learning. ' +
            'Built with React and TypeScript for a robust and scalable frontend, Redux and RTK-Query for state management and API handling, ' +
            'and styled with SCSS for a modern and responsive user interface.'
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