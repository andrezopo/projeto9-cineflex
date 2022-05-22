import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InstructionText from "./InstructionText";
import Showtime from "./Showtime";
import styled from "styled-components";
import Footer from "./Footer";

export default function ShowtimeSelection() {
  const { movieId } = useParams();
  const [showtimes, setShowtimes] = useState([]);
  const [movieInfo, setMovieInfo] = useState({});

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`
    );
    promise.then((res) => {
      setShowtimes(res.data.days);
      setMovieInfo(res.data);
    });
  }, []);

  return (
    <>
      <InstructionText instruction={` horário`} />
      <Container>
        {showtimes.map((showtime, index) => (
          <Showtime
            weekday={showtime.weekday}
            date={showtime.date}
            showtimes={showtime.showtimes}
            key={index + 10}
          />
        ))}
      </Container>
      <Footer movieName={movieInfo.title} movieImage={movieInfo.posterURL} />
    </>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  padding: 24px;
  margin-bottom: 118px;
`;
