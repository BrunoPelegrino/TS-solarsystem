import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      <div className="planets">
        {Planets.map((planet, index) => (
          <PlanetCard
            key={ index }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </div>
    </div>
  );
}

export default SolarSystem;
