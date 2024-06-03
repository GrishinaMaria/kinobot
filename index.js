const input = document.querySelector('#input');
const button = document.querySelector('.button');
const container = document.querySelector('.container');

const myMovies = {
  триллер: [
    'Семь',
    'Игра',
    'Под покровом ночи',
    'Девушка в поезде',
    'Побочный эффект',
    'Транс',
  ],
  драма: [
    'Оппенгеймер',
    'Семь жизней',
    'Гаттака',
    'Планета Ка-Пэкс',
    'Лобстер',
    'Это всего лишь конец света',
    'Одинокий мужчина',
  ],
  боевик: [
    'Темный рыцарь',
    'Довод',
    'Слоёный торт',
    'Пристрели их',
  ],
  детектив: [
    'Шестое чувство',
    'Невидимый гость',
    'Достать ножи',
    'Исчезнувшая',
  ],
  комедия: [
    'Резня',
    'Эта дурацкая любовь',
    'Отель Гранд Будапешт',
  ],

};

function getRandomMovie(genre) {
  const movies = myMovies[genre];
  if (!movies) {
    return `${genre}? В любой непонятной ситуации смотри фильмы с Гослингом \ud83d\ude0b`;
  }
  const randomMovieNum = Math.floor(Math.random() * movies.length);
  return movies[randomMovieNum];
}

function addQA() {
  const newQuestion = document.createElement('div');
  newQuestion.className = 'question';
  newQuestion.innerText = input.value;

  container.prepend(newQuestion);

  const genre = input.value.toLowerCase();
  const randomMovie = getRandomMovie(genre);
  const newAnswer = document.createElement('div');
  newAnswer.className = 'answer';
  newAnswer.innerText = randomMovie;
  container.prepend(newAnswer);

  input.value = '';
}

button.addEventListener('click', addQA);

input.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    addQA();
  }
});
