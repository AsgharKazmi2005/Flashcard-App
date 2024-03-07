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
  const [card, setCard] = useState(biologyQuestions[0]);
  const [isFlipped, setFlip] = useState(false);

  function changeCard() {
    let randIndex = Math.floor(Math.random() * biologyQuestions.length);
    console.log(randIndex);
    setCard(biologyQuestions[randIndex]);
  }

  function flipCard() {
    setFlip(!isFlipped);
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
        <button onClick={changeCard}> → </button>
      </div>
    </>
  );
}

export default App;
