import './square.css';

export const createSquare = ({
    size = 'medium',
    backgroundColor,
}) => {
    const div = document.createElement('div');

    div.className = [`.${size}-square`];

    div.style.backgroundColor = backgroundColor;

    return div;
};
