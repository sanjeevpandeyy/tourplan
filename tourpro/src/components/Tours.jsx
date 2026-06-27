import Card from "./card";
import "./Tour.css";

function Tours({ tours, removeTour }) {
  return (
    <div className="tour-container">
      <h2 className="title">Tour Plan</h2>

      <div className="cards-container">
        {tours.map((tour) => (
          <Card
            key={tour.id}
            {...tour}
            removeTour={removeTour}
          />
        ))}
      </div>
    </div>
  );
}

export default Tours;