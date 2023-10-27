import facebook from '../images/facebook — копия.jpg'

type ProjectCardDataType = {
    img: string
    title: string
    text: string
}


export const projectCardData: Array<ProjectCardDataType> = [
    {
        img: facebook,
        title: 'Facebook',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam amet, consequuntur\n' +
            '    dolorum enim fugiat iste itaque labore laudantium nam nobis obcaecati officia perspiciatis quasi\n' +
            '    similique suscipit voluptate.'
    },

    {
        img: facebook,
        title: 'ToDo',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam amet, consequuntur\n' +
            '    dolorum enim fugiat iste itaque labore laudantium nam nobis obcaecati officia perspiciatis quasi\n' +
            '    similique suscipit voluptate.'
    },
    {
        img: facebook,
        title: 'Counter',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam amet, consequuntur\n' +
            '    dolorum enim fugiat iste itaque labore laudantium nam nobis obcaecati officia perspiciatis quasi\n' +
            '    similique suscipit voluptate.'
    },


]