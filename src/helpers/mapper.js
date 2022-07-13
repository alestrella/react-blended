export const mapper = movieList => {
  return movieList.map(({ backdrop_path, title, overview, id }) => {
    return { id, title, overview, image: backdrop_path, watched: false };
  });
};
