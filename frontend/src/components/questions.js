import React, { useState } from 'react';
import axios from "axios";
import './style.css';

function QuizApp(props) {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getQuestions = () => {
    setIsLoading(true);
    axios.post("http://127.0.0.1:5000/generate-content", {  
      pdf_text: props.data,
      prompt_type: "2"
    })
    .then(response => {
      try {
        console.log(response);
        let obj = response.data;
        console.log(obj)
        if (typeof obj === "string") {
          obj = JSON.parse(obj);  // Ensure JSON parsing if backend returns a string
        }
  
        if (obj && Array.isArray(obj.questions)) {
          setQuizData(obj.questions);
          setCurrentQuestion(0);
          setScore(0);
          setIncorrectAnswers([]);
          setShowResult(false);
        } else {
          console.error("Invalid response format", obj);
        }
      } catch (error) {
        console.error("Error parsing quiz data", error);
      }
    })
    .catch(error => console.error("Error fetching quiz:", error))
    .finally(() => setIsLoading(false));
  };
  

  const checkAnswer = () => {
    if (selectedOption === '') return;

    const isCorrect = selectedOption === quizData[currentQuestion].answer;
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    } else {
      setIncorrectAnswers(prev => [...prev, {
        question: quizData[currentQuestion].question,
        incorrectAnswer: selectedOption,
        correctAnswer: quizData[currentQuestion].answer,
      }]);
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption('');
    } else {
      setShowResult(true);
    }
  };

  const retryQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIncorrectAnswers([]);
    setShowResult(false);
    setSelectedOption('');
  };

  return (
    <div className="quiz-container">
      <button className="inline-btn" onClick={getQuestions} disabled={isLoading}>
        {isLoading ? "Loading..." : "Start Quiz"}
      </button>

      {quizData.length > 0 && !showResult && (
        <div className="quiz-section">
          <h2>Question {currentQuestion + 1} of {quizData.length}</h2>
          <p className="question-text">{quizData[currentQuestion].question}</p>

          <div className="options">
            {quizData[currentQuestion].choices.map((choice, index) => (
              <label key={index} className="option">
                <input 
                  type="radio" 
                  name="quiz" 
                  value={choice} 
                  checked={selectedOption === choice}
                  onChange={() => setSelectedOption(choice)}
                />
                {choice}
              </label>
            ))}
          </div>

          <button className="inline-btn" onClick={checkAnswer} disabled={!selectedOption}>
            Submit
          </button>
        </div>
      )}

      {showResult && (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} / {quizData.length}</p>

          {incorrectAnswers.length > 0 && (
            <div>
              <h3>Incorrect Answers:</h3>
              {incorrectAnswers.map((answer, index) => (
                <div key={index}>
                  <p><strong>Question:</strong> {answer.question}</p>
                  <p><strong>Your Answer:</strong> {answer.incorrectAnswer}</p>
                  <p><strong>Correct Answer:</strong> {answer.correctAnswer}</p>
                </div>
              ))}
            </div>
          )}
          
          <button className="inline-btn" onClick={retryQuiz}>Retry</button>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
