import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchApiVideos() {
      const response = await fetch(API);
      const data = await response.json();
      return setVideos(data);
    }
    fetchApiVideos();
    /* fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data)); */
  }, []);
  return videos;
};

export default useInitialState;
