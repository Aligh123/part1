import React from "react";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((item, index) => (
        <p key={index}>
          {item.name} {item.exercises}
        </p>
      ))}
    </div>
  );
};
export default Content;