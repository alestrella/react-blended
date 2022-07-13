import Button from 'components/Button/Button';
import { GalleryItem, Poster, WatchedFlag } from './MovieGalleryItem.styled';

const API_IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieGalleryItem = ({
  id,
  image,
  title,
  watched,
  handleWatched,
  handleModal,
  overview,
}) => {
  return (
    <GalleryItem>
      <Poster src={API_IMG_PATH + image} alt={title} />
      <p>{title}</p>
      <p onClick={() => handleWatched(id)}>
        Watched: <WatchedFlag>{'' + watched}</WatchedFlag>
      </p>
      <Button caption="show info" handleClick={() => handleModal(overview)} />
    </GalleryItem>
  );
};

export default MovieGalleryItem;
