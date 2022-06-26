import PropTypes from 'prop-types';

export const SocialList = ({
  links: { instagram, twitter, facebook, linkedin },
}) => {
  return (
    <ul>
      <li>
        <a href={instagram}>Instagram</a>
      </li>
      <li>
        <a href={twitter}>Twitter</a>
      </li>
      <li>
        <a href={facebook}>Facebook</a>
      </li>
      <li>
        <a href={linkedin}>Linkedin</a>
      </li>
    </ul>
  );
};

SocialList.propTypes = {
  links: PropTypes.shape({
    instagram: PropTypes.string,
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    linkedin: PropTypes.string,
  }).isRequired,
};
