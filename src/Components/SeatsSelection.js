import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import InstructionText from "./InstructionText";
import axios from "axios";
import SeatsForm from "./SeatsForm";

export default function SeatsSelection() {
  const { showtimeId } = useParams();
  const [seats, setSeats] = useState([]);
  const [showtime, setShowtime] = useState({});
  const [seatId, setSeatId] = useState([]);
  const [color, setColor] = useState("");
  const [showtimeInfo, setShowtimeInfo] = useState({});
  const [movieInfo, setMovieInfo] = useState({});
  const [seatsApi, setSeatsApi] = useState([]);

  function selectSeat(status, index, idApi) {
    if (status) {
      if (!seatId.includes(index)) {
        setSeatId([...seatId, index]);
        setSeatsApi([...seatsApi, idApi]);
      } else {
        setSeatId(seatId.filter((elem) => elem !== index));
        setSeatsApi(seatsApi.filter((elem) => elem !== idApi));
      }
    } else {
      alert("Esse assento não está disponível");
    }

    if (status !== "false") {
      if (!color) {
        setColor("#8DD7CF");
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
      setMovieInfo({ ...res.data.movie });
      setShowtimeInfo({ ...res.data.day });
    });
  }, []);

  return (
    <>
      <InstructionText height={"90px"} instruction={`(s) seu(s) assentos`} />
      <Container>
        <StyledSeats>
          {seats.map((seat, index) => (
            <div
              key={index}
              onClick={() => {
                selectSeat(seat.isAvailable, index, seat.id);
              }}
            >
              {seatId.includes(index) ? (
                <Button color={color} selected={seat.isAvailable}>
                  {seat.name < 10 ? `0${seat.name}` : seat.name}
                </Button>
              ) : (
                <Button color={""} selected={seat.isAvailable}>
                  {seat.name < 10 ? `0${seat.name}` : seat.name}
                </Button>
              )}
            </div>
          ))}
        </StyledSeats>
        <SeatCaption />
        <SeatsForm
          SeatsIds={seatsApi}
          setSeats={setSeatsApi}
          showtime={showtime}
          seatsNumber={seatId}
        />
      </Container>

      <Footer
        movieName={movieInfo.title}
        showtime={showtimeInfo}
        movieImage={movieInfo.posterURL}
        time={showtime.name}
      />
    </>
  );
}

function SeatCaption() {
  return (
    <Caption>
      <div>
        <Button color={"#8DD7CF"} selected={true}></Button>
        <div>Selecionado</div>
      </div>
      <div>
        <Button color={"#C3CFD9"} selected={true}></Button>
        <div>Disponível</div>
      </div>
      <div>
        <Button color={"#FBE192"} selected={true}></Button>
        <div>Indisponível</div>
      </div>
    </Caption>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  padding: 24px;
  padding-top: 0px;
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
  background-color: ${(props) =>
    props.selected ? (props.color ? props.color : "#C3CFD9") : "#FBE192"};
  border: ${(props) =>
    props.selected
      ? props.color
        ? "1px solid #1AAE9E"
        : "1px solid #7B8B99"
      : "1px solid #F7C52B"};
`;
const Caption = styled.div`
  margin: 0 auto;
  display: flex;
  width: 85%;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  line-height: 15px;
  font-weight: 400;
  color: #4e5a65;
  margin-top: 16px;
  margin-bottom: 40px;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div:nth-child(1) button {
    border-color: #1aae9e;
  }

  div:nth-child(2) button {
    border-color: #7b8b99;
  }

  div:nth-child(3) button {
    border-color: #f7c52b;
  }
`;

function Footer({ movieName, showtime, movieImage, time }) {
  return (
    <Bottom>
      <img src={movieImage} alt="" />

      <div>
        <div>{movieName}</div> <div>{`${showtime.weekday} - ${time}`}</div>
      </div>
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
