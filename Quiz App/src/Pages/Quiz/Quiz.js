import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import "./Quiz.css";
import Question from "../../components/Question/Question";

// Function to decode HTML entities
const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    console.log(questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);

  console.log(options);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {decodeHtml(name)}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>{decodeHtml(questions[currQues]?.category)}</span>
            <span>Score : {score}</span>
          </div>

          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <CircularProgress style={{ margin: 100 }} color="inherit" size={150} thickness={1} />
      )}
    </div>
  );
};

export default Quiz;
