import fromJS from '@hs/transmute/fromJS';

const defaultOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  header: { 'Content-Type': 'application/json' },
  redirect: 'follow',
  referrerPolicy: 'no-referrer',
};
const immutableFetch = (url, params, options) => {
  return fetch(url + new URLSearchParams(params), options)
    .then((res) => res.json())
    .then(fromJS);
};

const ImmutableAPI = {
  get: ({ url, params, options = { method: 'GET', ...defaultOptions } }) =>
    immutableFetch(url, params, options),
  post: ({
    url,
    params,
    body = {},
    options = { method: 'POST', body: JSON.stringify(body), ...defaultOptions },
  }) => immutableFetch(url, params, options),
  put: ({
    url,
    params,
    body,
    options = { method: 'PUT', body: JSON.stringify(body), ...defaultOptions },
  }) => immutableFetch(url, params, options),
  patch: ({
    url,
    params,
    body = {},
    options = {
      method: 'PATCH',
      body: JSON.stringify(body),
      ...defaultOptions,
    },
  }) => immutableFetch(url, params, options),
  delete: ({
    url,
    params,
    body = {},
    options = {
      method: 'DELETE',
      body: JSON.stringify(body),
      ...defaultOptions,
    },
  }) => immutableFetch(url, params, options),
};

export default ImmutableAPI;
