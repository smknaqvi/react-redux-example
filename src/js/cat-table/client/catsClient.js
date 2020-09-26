import API from '../../utils/ImmutableAPI';

const url = 'https://cat-fact.herokuapp.com';

export function requestFn() {
  return API.get({ url: `${url}/facts` });
}
