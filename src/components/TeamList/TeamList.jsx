import PropTypes from 'prop-types';
import { TeamItem } from 'components/TeamItem/TeamItem';

export const TeamList = ({ teamMembers }) => {
  return (
    <ul>
      {teamMembers.map(({ id, avatar, name, profession, links }) => {
        return (
          <TeamItem
            key={id}
            avatar={avatar}
            name={name}
            profession={profession}
            links={links}
          />
        );
      })}
    </ul>
  );
};

TeamList.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      profession: PropTypes.string.isRequired,
      links: PropTypes.object.isRequired,
    }).isRequired
  ).isRequired,
};
