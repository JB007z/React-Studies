
const HEAD = (
  <div
    style={{
      width: "35px",
      height: "35px",
      borderRadius: "100%",
      border: "8px solid black",
      position: "absolute",
      top: "30px",
      right: "-14px",
    }}
  />
)

const BODY = (
  <div
    style={{
      width: "8px",
      height: "80px",
      background: "black",
      position: "absolute",
      top: "65px",
      right: 0,
    }}
  />
)

const LEFT_ARM = (
  <div
    style={{
      width: "70px",
      height: "8px",
      background: "black",
      position: "absolute",
      top: "95px",
      right: "8px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
)

const RIGHT_ARM = (
  <div
    style={{
      width: "70px",
      height: "8px",
      background: "black",
      position: "absolute",
      top: "95px",
      right: "-70px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
)

const RIGHT_LEG = (
  <div
    style={{
      width: "70px",
      height: "8px",
      background: "black",
      position: "absolute",
      top: "135px",
      right:"-62px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
)

const LEFT_LEG = (
  <div
    style={{
      width: "70px",
      height: "8px",
      background: "black",
      position: "absolute",
      top: "135px",
      right: 0,
      
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]


type HangmanDrawingProps={
  numberOfGuesses : number
}

const HangmanDrawing=({numberOfGuesses}:HangmanDrawingProps)=> {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0,numberOfGuesses)}
      <div
        style={{
          height: "35px",
          width: "8px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "8px",
          width: "140px",
          background: "black",
          marginLeft: "80px",
        }}
      />
      <div
        style={{
          height: "280px",
          width: "8px",
          background: "black",
          marginLeft: "80px",
        }}
      />
      <div style={{ height: "8px", width: "180px", background: "black" }} />
    </div>
  )
}

export default HangmanDrawing