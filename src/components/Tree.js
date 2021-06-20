import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toggle, drop, animation } from "../actions/index";
import Apple from "./Apple";

const Tree = (props) => {
  const [counter, setCounter] = useState(0); //that will us about index and id
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (
      props.startDrop && //chech animation tree has done and started to drop apples
      props.apples.length > 0 &&
      counter < props.apples.length
    ) {
      const interval = setTimeout(async () => {
        await props.animation(counter + 1); //changed status of animation
        await delay(1000); 
        await props.toggle(counter + 1); //toggle id of apple which is in apples state
        await props.drop(counter); //return index which should be push into basket array
        setCounter((prev) => prev + 1);
      }, 2000);
      return () => {
        clearInterval(interval);
      };
    }
  });

  return (
    <div className={props.shaking ? "tree shakeTree" : "tree"} id="toggle">
      <div className="trunk"></div>
      <div className="leaf"></div>
      <div className="bottom"></div>
      <div className="middle"></div>
      <div className="top"></div>
      {props.apples.map((apple) => {
        if (!apple.dropped && !apple.animation) { //render apples which animation is not started
          return <Apple key={apple.id} apple={apple} />;
        }
        if (!apple.dropped && apple.animation) { //render apples which are dropping from the tree
          return <Apple key={apple.id} apple={apple} />;
        }
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    apples: state.apples,
    dropedApple: state.dropedApple
  };
};

export default connect(mapStateToProps, { toggle, drop, animation })(Tree);
