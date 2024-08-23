import React from "react";
import useFetch from "./useFetch";

function App() {
  useFetch("https://data.origamid.dev/produtos", { method: "GET" });
  return <></>;
}

export default App;
