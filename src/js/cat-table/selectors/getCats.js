import get from '@hs/transmute/get';
import getIn from '@hs/transmute/getIn';
import { createSelector } from 'reselect';
import { SUCCEEDED } from '../../constants/statuses';

export const getCatsFromState = (state) => get('cats', state);

export const getClientStatusFromState = createSelector(
  [getCatsFromState],
  (catsInfo) => get(catsInfo, 'clientStatus')
);

export const getIsLoadingFromState = createSelector(
  [getCatsFromState],
  (catsInfo) => get('clientStatus', catsInfo) !== SUCCEEDED
);

export const getCatFactsFromState = createSelector(
  [getCatsFromState],
  (catsInfo) => getIn(['data', 'all'], catsInfo)
);
