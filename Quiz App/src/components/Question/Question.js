import { useEffect, useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Question.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Function to decode HTML entities
const decodeHtml = (html) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const [currentOptions, setCurrentOptions] = useState([]);

  const history = useNavigate();

  // Function to shuffle options
  const shuffleOptions = (optionsArray) => {
    return optionsArray.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (questions && questions[currQues]) {
      setCurrentOptions(
        shuffleOptions([
          questions[currQues].correct_answer,
          ...questions[currQues].incorrect_answers,
        ])
      );
    }
    setSelected(null); // Reset the selected option on question change
  }, [currQues, questions]);

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues >= questions.length - 1) {
      history("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected(null);
    } else {
      setError("Please select an option");
    }
  };

  const handleQuit = () => {
    history("/");
  };

  return (
    <div className="question">
      <h1>Question {currQues + 1}</h1>

      <div className="singleQuestion">
        <h2>{decodeHtml(questions[currQues].question)}</h2>

        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {currentOptions &&
            currentOptions.map((i) => (
              <button
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {decodeHtml(i)} {/* Decode each option */}
              </button>
            ))}
        </div>

        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className="responsiveButton"
            onClick={handleQuit}
          >
            Quit
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            className="responsiveButton"
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
