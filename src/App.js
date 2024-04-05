import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Какая спецификация в JS?',
    variants: [
      'ES',
      'Mocha',
      'Yopta',
    ],
    correct: 0,
  },
  {
  title: 'Какого года JS?',
  variants: [
    '2005',
    '1986',
    '1995',
  ],
  correct: 2,
},
  {
  title: 'Какая ES принесла стрелочные функции?',
  variants: [
    'ES2015',
    'ES6',
    'Оба ответы верны',
  ],
  correct: 2,
},
{
  title: 'Что такое хуки',
  variants: [
    'Это функции в функциональныч компонентах',
    'Это елементы компонентов',
    'Это контекст в React',
  ],
  correct: 2,
},
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
      <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({state, question, onClickVariant}) {
  const percent = Math.round((state / questions.length) * 100)
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%`}} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

function App() {
  const [correct, setCorrect] = useState(0);
  const [state, setState] = useState(0);
  const question = questions[state];
  const onClickVariant = (index) => {
    setState(state + 1);
    if (index === question.correct) {
      setCorrect(correct + 1)
  }
}
  return (
    <div className="App">
      {
        state !== questions.length ? (<Game state={state} question={question} onClickVariant={onClickVariant} />) : (
        <Result correct={correct}/>)
      }
      {/* <Result /> */}
    </div>
  );
  }

export default App;
