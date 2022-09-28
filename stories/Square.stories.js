import { createSquare } from './Button';

export default {
    title: 'Example/Square',
    argTypes: {
        backgroundColor: { control: 'color' },
        size: {
             options: ['small', 'medium', 'large'],
        },
    },
};

const Template = ({ label, ...args }) => {
    return createSquare({ label, ...args });
};

//FINISH HERE - Not done yet: Look at Button.stories.js and continue