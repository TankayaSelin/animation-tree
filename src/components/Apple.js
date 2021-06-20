import React, { useEffect } from "react";
import { connect } from "react-redux";

const Apples = (props) => {
  return (
    <div className="apples">
      <div
        key={props.apple.id}
        className={
          props.apple.dropped
            ? `apple a${props.apple.id} a${props.apple.id}-dropped`
            : props.apple.animation
            ? `apple a${props.apple.id} a${props.apple.id}-animation`
            : `apple a${props.apple.id}`
        }
      >
        {props.apple.id}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    apples: state.apples
  };
};

export default connect(mapStateToProps)(Apples);
