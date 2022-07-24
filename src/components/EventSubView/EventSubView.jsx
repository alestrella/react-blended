import { useFetchEvent } from 'hooks/useFetchEvent';
import { Link, useLocation } from 'react-router-dom';

const EventSubView = () => {
  const event = useFetchEvent();
  const location = useLocation();

  return (
    <>
      {event && (
        <div>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt="Event" width="250" />
          <Link to="details" state={location.state}>
            More details
          </Link>
        </div>
      )}
    </>
  );
};

export default EventSubView;
