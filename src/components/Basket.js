import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Apple from "./Apple";

let arr = []; //not to lose apples when the component re-render

const Basket = (props) => {
  const [loader, showLoader] = useState(false);
  useEffect(() => {
    if (props.dropedApple >= 0) {
      const interval = setTimeout(() => {
        showLoader(true); //to render apple which has just dropped into the basket
        arr.push(props.apples[props.dropedApple]); //to render apples which has already dropped into the basket
      }, 1000);
      return () => {
        showLoader(false);
        clearInterval(interval);
      };
    }
  }, [props.dropedApple]);

  return (
    <div
      style={{
        height: "100px",
        borderRadius: "40%",
        background: "pink",
        border: "1px solid grey",
        position: "relative"
      }}
    >
      {arr.length > 0 &&
        arr.map((apple) => {
          if (apple.dropped) {
            return <Apple key={apple.id} apple={apple} />;
          }
        })}
      {loader && (
        <Apple
          key={props.apples[props.dropedApple].id}
          apple={props.apples[props.dropedApple]}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    apples: state.apples,
    dropedApple: state.dropedApple
  };
};

export default connect(mapStateToProps)(Basket);
