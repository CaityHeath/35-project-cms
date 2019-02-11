import superagent from "superagent";

export const setModel = model => {
  return {
    type: "MODEL",
    payload: model
  };
};

/**
 *Runs a call to superagent with the url and dispatches response body to SCHEMA action. 
 *
 * @param {*} dispatch
 */
export const getSchema = (model, url) => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetSchema({ model: model, schema: data.body }));
  });
};

/**
 *Runs the SCHEMA action and sends payload to the reducer.
 *
 * @param {*} payload
 * @returns
 */
const runGetSchema = payload => {
  return {
    type: "SCHEMA",
    payload: payload
  };
};

 /**
 *Runs a call to superagent with the url and dispatches response body to MODELS action. 
 *
 * @param {*} dispatch
 */
export const getModels = url => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetModels(data.body));
  });
};

/**
 *Runs the MODELS action and sends payload to the reducer.
 *
 * @param {*} payload
 * @returns
 */
const runGetModels = payload => {
  return {
    type: "MODELS",
    payload: payload
  };
};


/**
 *
 *Runs a call to superagent with the url and dispatches response body to RECORDS action. 
 * @param {*} data
 */
export const getRecords = url => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetRecords(data.body.results));
  });
};



/**
 *Runs the RECORDS action and sends payload to the reducer.
 *
 * @param {*} payload
 * @returns
 */
const runGetRecords = payload => {
  return {
    type: "RECORDS",
    payload: payload
  };
};



 /**
 * Runs a call to superagent with the url and dispatches response body to RECORD action. 
 *
 * @param {*} dispatch
 */
export const getRecord = url => dispatch => {
  superagent.get(url).then(data => {
    dispatch(runGetRecord(data.body));
  });
};

/**
 *Runs the RECORD action and sends payload to the reducer.
 *
 * @param {*} payload
 * @returns
 */
const runGetRecord = payload => {
  return {
    type: "RECORD",
    payload: payload
  };
};

export const post = (model, url, record) => dispatch => {
  superagent
    .post(url)
    .send(record)
    .then(data => {
      dispatch(runPost({ model, record: data.body }));
    });
};

const runPost = payload => {
  return {
    type: "POST",
    payload: payload
  };
};

export const put = (model, url, record) => dispatch => {
  superagent
    .put(url)
    .send(record)
    .then(data => {
      dispatch(runPut({ model, record: data.body }));
    });
};

const runPut = payload => {
  return {
    type: "PUT",
    payload: payload
  };
};

export const destroy = (model, id, url) => dispatch => {
  superagent.delete(url).then(data => {
    dispatch(runDestroy({ model, id }));
  });
};

const runDestroy = payload => {
  return {
    type: "DELETE",
    payload: payload
  };
};

export const clearRecord = () => {
  return {
    type: "CLEAR"
  };
};
