type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "8vh",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
        height: "10vh",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
              display: "inline-block",
              height: "100%",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
