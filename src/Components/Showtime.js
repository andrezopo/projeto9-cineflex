import { Link } from "react-router-dom";
import styled from "styled-components";

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

const Button = styled.button`
  width: 82px;
  height: 42px;
  background-color: #e8833a;
  color: #ffffff;
  font-size: 18px;
  line-height: 21px;
  font-weight: 400;
  text-align: center;
  text-justify: center;
  border-radius: 3px;
  border-width: 0px;
  margin: 24px 4px;
`;
