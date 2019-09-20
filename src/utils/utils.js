import axios from 'axios';

const addIdAndKey = (id, key) => {
  axios.defaults.headers.common['x-app-id'] = id;
  axios.defaults.headers.common['x-app-key'] = key;
};

export default addIdAndKey;