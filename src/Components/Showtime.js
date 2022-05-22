import { Link } from "react-router-dom";

import Button from "./DefaultButton";

export default function Showtime({ weekday, date, showtimes }) {
  return (
    <div>
      <div>
        {weekday} - {date}
      </div>
      <div>
        {showtimes.map((showtime, index) => (
          <Link key={index} to={`/sessao/${showtime.id}`}>
            <Button>{showtime.name}</Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
