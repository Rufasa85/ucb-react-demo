import { useState } from "react";
function HelloCard(props) {
  const [count, setCount] = useState(0);
  console.log(props);
  const colors = [
    "salmon",
    "cornflowerblue",
    "deeppink",
    "deepskyblue",
    "honeydew",
  ];
  const styleObj = {
    card: {
      backgroundColor: props.favColor
        ? props.favColor
        : colors[Math.floor(Math.random() * colors.length)],
    },
    h3: {
      fontSize: `${10 + count}px`,
    },
  };

  return (
    <div style={styleObj.card}>
      <h3>
        {props.name} count: {count}
      </h3>
      <p style={styleObj.p}>
        my name is {props.name} and has {props.name.length} letters! My name
        backwards is {props.name.split("").reverse().join("")}
      </p>
      {props.likesCats ? <p>cats are cool</p> : null}
      <button
        style={styleObj.h3}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me count:{count}
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset count
      </button>
      <hr />
    </div>
  );
}

export default HelloCard;
