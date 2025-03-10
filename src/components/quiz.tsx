import React, { useState } from 'react';
import '../components/styles/QuizPagestyles.css';

const questions = [
    {
        questionText: 'What is the capital of Kazakhstan?',
        answerOptions: [
            { answerText: 'Астана', isCorrect: true },
            { answerText: 'Алматы', isCorrect: false },
            { answerText: 'Шымкент', isCorrect: false },
            { answerText: 'Актау', isCorrect: false }
        ]
    },
    {
        questionText: 'I am going to eat my breakfast',
        answerOptions: [
            { answerText: 'Я буду завтракать завтра', isCorrect: false },
            { answerText: 'Я не буду кушать', isCorrect: false },
            { answerText: 'Я собираюсь позавтракать', isCorrect: true },
            { answerText: 'Бари дурыс', isCorrect: false }
        ]
    }
];

function QuizComponent() {
    const [currentquestion, setCurrentquestion] = useState(0);
    const [answered, setAnswered] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);

    const handleAnswerOption = (index: number | React.SetStateAction<null>, isCorrect: boolean) => {
        if (!answered) {
            setSelectedOption(index);
            setAnswered(true);
            if (isCorrect) {
                setScore(score + 1);
            }
        }
    };

    const NextQuestion = () => {
        if (currentquestion < questions.length - 1) {
            setCurrentquestion(currentquestion + 1);
            setAnswered(false);
            setSelectedOption(null);
        }
    };

    return (
        <div className='quiz-container'>
            <div className="quiz-blockk">
                <h2>Quiz for PolyGlot</h2>
                <p className="question-text">{questions[currentquestion].questionText}</p>
                
                <div className="quiz-questions">
                    {questions[currentquestion].answerOptions.map((option, index) => (
                        <button 
                            key={index}
                            onClick={() => handleAnswerOption(index, option.isCorrect)}
                            className={`answer-options 
                                ${answered && option.isCorrect ? "correct-answer" : ""}
                                ${answered && selectedOption === index && !option.isCorrect ? "wrong-answer" : ""}
                            `}
                            disabled={answered}
                        >
                            {option.answerText}
                        </button>
                    ))}
                    
                    <button 
                        className={answered ? "nextq" : "nextqdisable"}
                        disabled={!answered || currentquestion === questions.length - 1} 
                        onClick={NextQuestion}
                    >
                        {currentquestion === questions.length - 1 ? "Finish" : "Next Question"}
                    </button>

                    <p className="questionryad">Question {currentquestion + 1} of {questions.length}</p>
                    <p className="score">Score: {score}</p>
                </div>
            </div>
        </div>
    );
}

export default QuizComponent;
