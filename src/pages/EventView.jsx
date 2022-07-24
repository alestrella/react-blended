import { useState, useEffect } from 'react';
import { fetchEvents } from 'services/eventsApi';
import { Link, Outlet, useLocation } from 'react-router-dom';

const EventView = () => {
  const [events, setEvents] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <div>
      <ul>
        {events &&
          events.map(({ id, name }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location.pathname }}>
                  {name}
                </Link>
              </li>
            );
          })}
      </ul>
      <Outlet />
    </div>
  );
};

export default EventView;
