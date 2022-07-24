import { useLocation, useNavigate } from 'react-router-dom';
import { useFetchEvent } from 'hooks/useFetchEvent';

const EventDetailsView = () => {
  const event = useFetchEvent();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {event && (
        <div>
          <button
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            Go back
          </button>
          <h1>{event.name}</h1>
          <img src={event.images[0].url} alt="Event" width="250" />
          <p>{event.classifications[0].genre.name}</p>
          <p>{event.classifications[0].subGenre.name}</p>
        </div>
      )}
    </>
  );
};
export default EventDetailsView;
