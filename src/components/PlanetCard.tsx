type PlanetNameProp = {
  planetName: string,
  planetImage: string,
};

function PlanetCard({ planetName, planetImage }: PlanetNameProp) {
  return (
    <div className="planet-card" data-testid="planet-card">
      <img className={ planetName } src={ planetImage } alt={ `Planeta ${planetName}` } />
      <p data-testid="planet-name">{planetName}</p>
    </div>
  );
}

export default PlanetCard;
