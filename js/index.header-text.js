const headerTitle = document.querySelector('.header__title');

const greetings = [
    'HELLO!',
    'HI!',
    'HOLA!',
    'GREETINGS',
    'ВІТАЮ!',
    'ПРИВІТ!'
];

const getRandomEl = (arr) => arr[ Math.floor(Math.random() * arr.length) ];

headerTitle.innerText = getRandomEl(greetings);
