import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const aplh = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  const [randomWord, setRandomWord] = useState("hello");
  const [didWin, setDidWin] = useState(false);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [guessWord, setGuessWord] = useState(
    Array.from({ length: randomWord.length })
  );

  useEffect(() => {
    if (numberOfGuesses === randomWord.length) {
      if (randomWord === guessWord.join("").toLowerCase()) {
        setDidWin(true);
      } else {
        //fill rest of the letters
      }
    }
  }, [numberOfGuesses, randomWord, guessWord]);
  const onClick = (word) => {
    if (numberOfGuesses === randomWord.length || didWin) {
      console.log(numberOfGuesses);
      return;
    }

    const randomWordArr = randomWord.split("");

    if (randomWord.includes(word.toLowerCase())) {
      let temp = guessWord;
      for (let index in randomWordArr) {
        if (randomWordArr[index] === word.toLowerCase()) {
          temp[index] = word.toUpperCase();
        }
      }
      if (numberOfGuesses + 1 < randomWord.length) {
        setGuessWord(temp);
        setNumberOfGuesses((prev) => prev + 1);
        console.log(temp);
      } else if (numberOfGuesses + 1 === randomWord.length) {
        if (temp.join("") === randomWord) {
          // setDidWin(true);
          setNumberOfGuesses((prev) => prev + 1);

          console.log("guess", numberOfGuesses);
        } else {
          setNumberOfGuesses((prev) => prev + 1);
          console.log("guess", numberOfGuesses);
          // setDidWin(false);
        }
      }
    } else {
      if (numberOfGuesses + 1 < randomWord.length) {
        setNumberOfGuesses((prev) => prev + 1);
        console.log("guess", numberOfGuesses);
      } else {
        console.log("guess-fail", numberOfGuesses);
        //setDidWin(false);
        setNumberOfGuesses((prev) => prev + 1);
      }
    }
  };
  return (
    <div>
      <div
        style={{
          height: "400px",
          border: "1px solid black",
          marginBottom: "10px"
        }}
      >
        {/* <div>{numberOfGuesses === randomWord.length && didWin}</div> */}
        {numberOfGuesses === randomWord.length ? (
          didWin ? (
            <div>You Won</div>
          ) : (
            <div>You Lost</div>
          )
        ) : null}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            {guessWord.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    color:
                      numberOfGuesses === randomWord.length
                        ? item === undefined
                          ? "red"
                          : "black"
                        : "black"
                  }}
                >
                  {numberOfGuesses === randomWord.length
                    ? item === undefined
                      ? randomWord[index].toUpperCase()
                      : item
                    : item}
                  <div style={{ width: "50px" }}></div>
                </div>
              );
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            {randomWord.split("").map((_, index) => {
              return (
                <div key={index}>
                  __<div style={{ width: "50px" }}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        {Array.from({ length: 26 }).map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                onClick(aplh[index]);
              }}
            >
              {aplh[index]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
