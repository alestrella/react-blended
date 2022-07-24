import { useLocation } from 'react-router-dom';
import { Navlink } from './Navigation.styled';

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes('details') && (
        <nav>
          <li>
            <Navlink to="/">Main</Navlink>
          </li>
          <li>
            <Navlink to="events">Events</Navlink>
          </li>
        </nav>
      )}
    </>
  );
};

export default Navigation;
