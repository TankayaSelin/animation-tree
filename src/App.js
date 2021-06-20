import React, { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { toggle } from "./actions/index";
import Tree from "./components/Tree";
import Basket from "./components/Basket";

const App = (props) => {
  const [shaking, setShaking] = useState(false); // start shaking
  const [startDrop, setStartDrop] = useState(false); //ended shaking and starting to drop apples

  const startShaking = () => {
    setShaking(true); //starting to shaking
    const timer = setTimeout(() => {
      setShaking(false); //stop shaking
      setStartDrop(true); //starting to drop apples
    }, 3000);
    return () => clearTimeout(timer);
  };

  return (
    <div>
      <div className='tree-area-container'>
        <div className="tree-area">
          <Tree shaking={shaking} startDrop={startDrop} />
        </div>
        <button className="btn btn-success dropButton" onClick={startShaking}>
        Drop Apples
      </button>
      </div>
      <div className="d-flex justify-content-center">
        <Basket />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    apples: state.apples,
  };
};

export default connect(mapStateToProps, { toggle })(App);
