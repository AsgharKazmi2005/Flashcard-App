import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./assets/comp.jsx";

function App() {
  const biologyQuestions = [
    {
      question: "What is the powerhouse of the cell?",
      answer: "Mitochondria",
      difficulty: "easy",
    },
    {
      question: "What is the process by which plants make their food?",
      answer: "Photosynthesis",
      difficulty: "medium",
    },
    {
      question: "What is the largest organ in the human body?",
      answer: "Skin",
      difficulty: "medium",
    },
    {
      question:
        "What is the name of the molecule that carries genetic instructions for the development, functioning, growth, and reproduction of all known organisms?",
      answer: "DNA (Deoxyribonucleic acid)",
      difficulty: "hard",
    },
    {
      question: "What is the scientific name for the study of animals?",
      answer: "Zoology",
      difficulty: "easy",
    },
    {
      question: "Which gas is breathed in by plants during photosynthesis?",
      answer: "Carbon Dioxide",
      difficulty: "medium",
    },
    {
      question:
        "What is the name of the process by which plants lose water through their leaves?",
      answer: "Transpiration",
      difficulty: "medium",
    },
    {
      question:
        "What is the main function of the red blood cells in the human body?",
      answer: "Carry oxygen",
      difficulty: "easy",
    },
    {
      question: "What is the process by which cells replicate their DNA?",
      answer: "Replication",
      difficulty: "medium",
    },
    {
      question: "What is the longest bone in the human body?",
      answer: "Femur",
      difficulty: "medium",
    },
    {
      question: "What is the study of fungi called?",
      answer: "Mycology",
      difficulty: "hard",
    },
    {
      question: "Which gas do humans exhale when they breathe?",
      answer: "Carbon Dioxide",
      difficulty: "easy",
    },
    {
      question:
        "What is the name of the cell organelle where photosynthesis takes place?",
      answer: "Chloroplast",
      difficulty: "medium",
    },
    {
      question:
        "What is the name of the process by which plants lose water through their leaves?",
      answer: "Transpiration",
      difficulty: "medium",
    },
    {
      question:
        "What is the main function of the red blood cells in the human body?",
      answer: "Carry oxygen",
      difficulty: "easy",
    },
    {
      question: "What is the process by which cells replicate their DNA?",
      answer: "Replication",
      difficulty: "medium",
    },
    {
      question: "What is the longest bone in the human body?",
      answer: "Femur",
      difficulty: "medium",
    },
    {
      question: "What is the study of fungi called?",
      answer: "Mycology",
      difficulty: "hard",
    },
    {
      question:
        "What is the name of the cell organelle where photosynthesis takes place?",
      answer: "Chloroplast",
      difficulty: "medium",
    },
    {
      question:
        "What is the name of the process by which plants lose water through their leaves?",
      answer: "Transpiration",
      difficulty: "medium",
    },
  ];
  const [biologyQuestionsState, setBioQuestions] = useState(biologyQuestions);
  const [card, setCard] = useState(biologyQuestionsState[0]);
  const [index, setIndex] = useState(0);
  const [isFlipped, setFlip] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputClass, setInputClass] = useState("");

  function moveRight() {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex >= biologyQuestionsState.length) {
        newIndex = 0;
      }
      setCard(biologyQuestionsState[newIndex]);
      setFlip(false);
      return newIndex;
    });
  }

  function moveLeft() {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        newIndex = biologyQuestionsState.length - 1;
      }
      setCard(biologyQuestionsState[newIndex]);
      setFlip(false);
      return newIndex;
    });
  }

  function checkAnswer(e) {
    e.preventDefault();
    if (inputValue.trim().toLowerCase() === card.answer.toLowerCase()) {
      setInputClass("correctBox");
    } else {
      setInputClass("incorrectBox");
    }
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function flipCard() {
    setFlip(!isFlipped);
  }

  function shuffleCards() {
    const shuffledArray = [...biologyQuestionsState];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 

      // Swap elements at i and j indices
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    setBioQuestions(shuffledArray);
    setCard(biologyQuestionsState[0]);
  }

  return (
    <>
      <div className="main">
        <div className="details">
          <h2>The Ultimate Biology Quiz</h2>
          <h4>Test out your biology knowlege here!</h4>
          <h5>Number of Cards: {biologyQuestions.length}</h5>
        </div>
        <div
          className={`cards ${isFlipped ? "flipped" : ""}`}
          onClick={flipCard}
        >
          <Card
            question={card.question}
            answer={card.answer}
            id={card.difficulty}
          ></Card>
        </div>
        <form onSubmit={checkAnswer}>
          <label className="answerLabel" htmlFor="inputText">
            Guess Answer:{" "}
          </label>
          <input
            className={inputClass}
            type="text"
            id="inputText"
            name="inputText"
            value={inputValue}
            onChange={handleInputChange}
          ></input>
          <button type="submit">Submit</button>
        </form>
        <div className="buttonDiv">
          <button onClick={moveRight}> ← </button>
          <button onClick={moveLeft}> → </button>
          <div className="shuffle">
            <button onClick={shuffleCards}>Shuffle</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
