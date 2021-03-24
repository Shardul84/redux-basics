import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
function CakeContainer(props) {
  console.log("c", props);
  return (
    <div>
      <h1>Numbers of cake - {props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("s", state);

  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapdispatchToProps = (dispatch) => {
  console.log("d", dispatch);

  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(CakeContainer);
