import { SocialList } from '../SocialList/SocialList';

export const TeamItem = ({ avatar, name, profession, links }) => {
  return (
    <li>
      <img src={avatar} alt="Avatar" width="200" />
      <div>
        <h3>{name}</h3>
        <p>{profession}</p>
        <SocialList links={links} />
      </div>
    </li>
  );
};
