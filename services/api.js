import fetch from 'isomorphic-unfetch';

function PostLocation(location) {
  fetch('https://g6ra021qh5.execute-api.eu-west-1.amazonaws.com/trackmap/locations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(location),
  })
    .then((r) => {
      return r.json();
    })
    .catch((err) => {
      console.error(err);
    });
}

export default PostLocation;
