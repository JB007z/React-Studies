const HEAD = (
  <div
    style={{
      width: "60px",
      height: "60px",
      borderRadius:"100%",
      border:"5px solid black",
      position:"absolute",
      left:"1184px",
      top:"70px"
    }}
  />
);

const BODY = (
    <div style={{
        position:"absolute",
        top:"130px",
        width:"8px",
        height:"90px",
        background:"black",
        left:"1210px"
    }}
    />
)

const LEFT_ARM = (<div style={
    {
        position:"absolute",
        top:"90px",
        left:"1210px",
        width:"8px",
        height:"80px",
        background:"black",
        rotate:"-50deg",
        transformOrigin:"right bottom"
        
    }
}/>)

const RIGHT_ARM = (<div style={
    {
        position:"absolute",
        top:"90px",
        left:"1210px",
        width:"8px",
        height:"80px",
        background:"black",
        rotate:"50deg",
        transformOrigin:"left bottom"
        
    }
}/>)

const LEFT_LEG = (<div style={
    {
        position:"absolute",
        top:"140px",
        left:"1215px",
        width:"8px",
        height:"80px",
        background:"black",
        rotate:"230deg",
        transformOrigin:"left bottom"
        
    }
}/>)
const RIGHT_LEG = (<div style={
    {
        position:"absolute",
        top:"140px",
        left:"1205px",
        width:"8px",
        height:"80px",
        background:"black",
        rotate:"-230deg",
        transformOrigin:"right bottom"
        
    }
}/>)

const HangmanDrawing = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "400px",
        width: "100%",
        margin: "0 auto",
        left:0
      }}
    >
      <div
        className="bg-dark"
        style={{
          position: "absolute",
          bottom: 0,
          left: "810px",
          width: "300px",
          height: "8px",
        }}
      />{" "}
      {/*base line*/}
      <div
        className="bg-dark"
        style={{
          position: "absolute",
          top: 0,
          left: "960px",
          width: "8px",
          height: "100%",
        }}
      />{" "}
      {/*vertical pole*/}
      <div
        className="bg-dark"
        style={{
          position: "absolute",
          top: 0,
          left: "960px",
          width: "250px",
          height: "8px",
        }}
      />{" "}
      {/*horizontal line*/}
      <div
        className="bg-dark"
        style={{
          position: "absolute",
          top: 0,
          left: "1210px",
          width: "8px",
          height: "70px",
        }}
      />
      {/*rope line*/}
      {HEAD}
      {BODY}
      {LEFT_ARM}
      {RIGHT_ARM}
      {LEFT_LEG}
      {RIGHT_LEG}
    </div>
    
  );
};

export default HangmanDrawing;
