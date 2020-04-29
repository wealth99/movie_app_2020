import React, { useEffect } from 'react';

function Detail({ location, history }) {
  useEffect(() => {
    if (location.state === undefined) {
      history.push('/');
    }
  }, []);
  if (!location.state) return null;
  return <span>{location.state.title}</span>;
}

export default Detail;
