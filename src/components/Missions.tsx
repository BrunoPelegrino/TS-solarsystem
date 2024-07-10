import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

function Missions() {
  return (
    <div className="missions" data-testid="missions">
      <Title headline="Missões" />
      <div className="missions-list">
        {missions.map((mission, index) => (
          <MissionCard
            key={ index }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />
        ))}
      </div>
    </div>
  );
}

export default Missions;
