import fetch from 'isomorphic-unfetch';
import merge from 'deepmerge';

function PostLocation(location) {
  const payload = merge(location, { deviceId: 'NHD184JH' });
  fetch('https://g6ra021qh5.execute-api.eu-west-1.amazonaws.com/trackmap/locations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((r) => {
      return r.json();
    })
    .catch((err) => {
      console.error(err);
    });
}

export default PostLocation;
