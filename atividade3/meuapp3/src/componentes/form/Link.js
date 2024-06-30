import React from "react";

const Link = ({ link, description }) => {
  return <a href={link}>{description}</a>;
};

export default Link;
