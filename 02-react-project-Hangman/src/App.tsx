import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import Keyboard from "./components/Keyboard";
import HangmanWord from "./components/HangmanWord";
function App() {
  const getWord = ()=>{
    return words[Math.floor(Math.random() * words.length)]
  }
  const [wordToGuess, setWordToGuess] = useState(getWord)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]); //<t> this is used to tell what type our state will have, any other type will throw an error
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLoser = incorrectLetters.length === 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)||isLoser||isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters,isLoser,isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetters(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(()=>{
      const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key!=='Enter') return;

      e.preventDefault();
      setGuessedLetters([])
      setWordToGuess(getWord())
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  },[])

  return (
    <div
      style={{
        maxWidth: "800px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        margin: "0 auto",
        alignItems: "center",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
        {isWinner && "You won! --Refresh to try again"}
        {isLoser&&"You lost! --Refresh to try again"}
      </div>{" "}
      {/* Reduced font size */}
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser} />
      <div style={{ alignSelf: "stretch", marginTop: "auto" }}>
        {" "}
        <Keyboard
          inactiveLetters={incorrectLetters}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          addGuessedLetter={addGuessedLetters}
          disabled = {isLoser||isWinner}
        />
      </div>
    </div>
  );
}

export default App;
