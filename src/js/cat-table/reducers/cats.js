import { Map } from 'immutable';
import {
  FAILED,
  STARTED,
  SUCCEEDED,
  UNINITIALIZED,
} from '../../constants/statuses';
import {
  FETCH_CAT_FACTS_FAILED,
  FETCH_CAT_FACTS_STARTED,
  FETCH_CAT_FACTS_SUCCEEDED,
} from '../actions/actionTypes';

const initialState = Map({
  clientStatus: UNINITIALIZED,
  data: Map({}),
  error: null,
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CAT_FACTS_STARTED:
      return state.set('clientStatus', STARTED);
    case FETCH_CAT_FACTS_SUCCEEDED:
      return state.setIn(['data'], payload).set('clientStatus', SUCCEEDED);
    case FETCH_CAT_FACTS_FAILED:
      return state.set('error', payload).set('clientStatus', FAILED);
    default:
      return state;
  }
};
