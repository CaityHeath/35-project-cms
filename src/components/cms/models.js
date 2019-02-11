import React from "react";
import { connect } from "react-redux";

import * as actions from "./actions.js";

const styles = {
  clickable: { cursor: "pointer" },
  delete: {
    color: "red",
    cursor: "pointer",
    marginLeft: ".5em"
  }
};

const API = process.env.REACT_APP_API;

class Models extends React.Component {
  
  
  /**
   * Sends a request for getModels action to be dispatched 
   *
   * @memberof Models
   */
  componentDidMount() {
    console.log('inside componenet did mount');
    let url = `${API}/models`;
    console.log(url);
    this.props.getModels(url);
  }

  
  /**
   *Sends a request for clearRecord, setModel and getRecords to be dispatched. 
   *
   * @param {*} model
   */
  selectModel = model => {
    let url = `${API}/${model}`;
    console.log(model);
    this.props.clearRecord();
    this.props.setModel(model);
    this.props.getRecords(url);
  };

  render() {
    return (
      <ul>
        {this.props.models &&
          this.props.models.map((model, i) => (
            <li
              key={`models-${i}`}
              onClick={() => {
                this.selectModel(model);
              }}
            >
              <span style={styles.clickable}>{model}</span>
            </li>
          ))}
      </ul>
    );
  }
}

/**
 *Sets state
 *
 * @param {*} state
 */
const mapStateToProps = state => ({
  models: state.records.models
});

/**
 *Sets the requests to be sent to the dipatcher. 
 *
 * @param {*} dispatch
 * @param {*} getState
 */
const mapDispatchToProps = (dispatch, getState) => ({
  setModel: model => dispatch(actions.setModel(model)),
  getModels: url => dispatch(actions.getModels(url)),
  getRecords: url => dispatch(actions.getRecords(url)),
  clearRecord: () => dispatch(actions.clearRecord())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Models);
