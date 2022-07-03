import { Section } from './Section/Section';
import { FeaturesList } from './FeaturesList/FeaturesList';
import { TeamList } from './TeamList/TeamList';
import featuresData from '../data/features.json';
import teamMembers from '../data/teamMembers.json';

export const App = () => {
  return (
    <>
      <Section>
        <FeaturesList data={featuresData} />
      </Section>
      <Section title="Наша команда">
        <TeamList teamMembers={teamMembers} />
      </Section>
    </>
  );
};
