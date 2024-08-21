import React from "react";
import Button from "./Button";
import Button2 from "./Button2";

function App() {
  const [total, setTotal] = React.useState(0);
  return (
    <>
      <p>Total: {total}</p>
      {/* <Button>Incremento</Button> */}
      <Button2 total={total} setTotal={setTotal} />
    </>
  );
}

export default App;
