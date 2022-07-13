import { GalleryBox } from './MovieGallery.styled';

const {
  default: MovieGalleryItem,
} = require('components/MovieGalleryItem/MovieGalleryItem');

const MovieGallery = ({ movieList, handleWatched, handleModal }) => {
  return (
    <GalleryBox>
      {movieList.map(({ id, image, title, watched, overview }) => (
        <MovieGalleryItem
          key={id}
          id={id}
          image={image}
          title={title}
          watched={watched}
          handleWatched={handleWatched}
          handleModal={handleModal}
          overview={overview}
        />
      ))}
    </GalleryBox>
  );
};

export default MovieGallery;
