type PlanetNameProp = {
  planetName: string,
  planetImage: string,
};

function SolarSystem({ planetName, planetImage }: PlanetNameProp) {
  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">{planetName}</p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}

export default SolarSystem;
