import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

//import ListGroup from "./components/ListGroup";
function App() {
  /*
  const items = ["Brazil", "Japan", "Italy", "France"];
  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
    </div>
  );*/
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onButtonClick={()=>setAlertVisibility(false)}>
          "You have been" <strong>ALERTED</strong>
        </Alert>
      )}
      <Button
        text="DO NOT CLICK"
        color="danger"
        onButtonClick={() => setAlertVisibility(true)}
      />
    </div>
  );
}

export default App;
