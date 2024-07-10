import iconDate from '../public/iconDate.svg';
import iconLocation from '../public/iconLocation.svg';
import iconDestination from '../public/iconDestination.svg';

type MissionCardProps = {
  name: string;
  year: string;
  country: string;
  destination: string;
};

function MissionCard({ name, year, country, destination }: MissionCardProps) {
  return (
    <div className="mission-card" data-testid="mission-card">
      <p className="mission-name" data-testid="mission-name">{name}</p>
      <div className="mission-desc-container">
        <div className="mission-desc">
          <img src={ iconDate } alt="" />
          <p className="mission-year" data-testid="mission-year">{year}</p>
        </div>
        <div className="mission-desc">
          <img src={ iconLocation } alt="" />
          <p className="mission-country" data-testid="mission-country">{country}</p>
        </div>
        <div className="mission-desc">
          <img src={ iconDestination } alt="" />
          <p className="mission-destination" data-testid="mission-destination">
            {destination}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionCard;
