import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import InstructionText from "./InstructionText";
import axios from "axios";

export default function SeatsSelection() {
  const { showtimeId } = useParams();
  const [seats, setSeats] = useState([]);
  const [showtime, setShowtime] = useState({});
  const [selected, setSelected] = useState("");

  function selectSeat(text, status) {
    if (status !== "false") {
      if (!selected) {
        setSelected("selected");
      } else {
        setSelected("");
      }
    }
  }

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${showtimeId}/seats`
    );
    promise.then((res) => {
      setShowtime({ ...res.data });
      setSeats([...res.data.seats]);
    });
  }, []);
  console.log(showtime.movie);
  console.log(seats);

  return (
    <>
      <InstructionText instruction={`(s) seu(s) assentos`} />
      <Container>
        <StyledSeats>
          {seats.map((seat, index) => (
            <div key={index} onClick={() => selectSeat(seat.isAvailable)}>
              <Button selected={seat.isAvailable}>{seat.name}</Button>
            </div>
          ))}
        </StyledSeats>
      </Container>
      <Footer
        movieName={showtime.movie}
        showtime={showtime.day}
        movieImage={showtime.movie}
        time={showtime.name}
      />
    </>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  padding: 24px;
  margin-bottom: 118px;
`;

const StyledSeats = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  div {
    border-radius: 12px;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 12px;
  margin: 9px 4px;
  margin-top: 0px;
  background-color: ${(props) => (props.selected ? "#C3CFD9" : "#FBE192")};
`;

function Footer({ movieName, showtime, movieImage, time }) {
  return (
    <Bottom>
      <img src={movieImage} alt="" />

      <>
        <div>{movieName.title}</div>{" "}
        <div>{`${showtime.weekday} - ${time}`}</div>
      </>
    </Bottom>
  );
}

const Bottom = styled.div`
  width: 100%;
  height: 118px;
  display: flex;
  align-items: center;
  font-size: 26px;
  line-height: 30px;
  font-weight: 400;
  color: #293845;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: #ffffff;
  z-index: 1;
  img {
    width: 48px;
    height: auto;
    margin: 22px;
  }
`;
