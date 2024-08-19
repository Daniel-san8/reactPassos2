import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = "Daniel San ◙" + " " + props.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description);
    console.log(props);
  });
  return <></>;
};

export default Head;
