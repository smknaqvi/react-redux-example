import { requestFn } from '../client/catsClient';
import { FETCH_CAT_FACTS_FAILED, FETCH_CAT_FACTS_STARTED, FETCH_CAT_FACTS_SUCCEEDED } from './actionTypes';

export const getCatFacts = () => (dispatch) => {
  dispatch({
    type: FETCH_CAT_FACTS_STARTED,
    payload: {},
  });
  requestFn()
    .then((facts) => {
      dispatch({
        type: FETCH_CAT_FACTS_SUCCEEDED,
        payload: facts,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_CAT_FACTS_FAILED,
        payload: error.message,
      });
    });
};
