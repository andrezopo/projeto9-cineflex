import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MovieSelection() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((response) => {
      setMovies(response.data);
      console.log(movies);
    });
    promise.catch(() => <div>Carregando conteudo...</div>);
  }, []);

  return (
    <>
      <div>Selecione o filme</div>
      <Movies>
        {movies.map((movie, index) => (
          <Link className="flex" to={`/filme/${movie.id}`}>
            <img key={index} src={movie.posterURL} alt="" />
          </Link>
        ))}
      </Movies>
    </>
  );
}

const Movies = styled.div`
  a {
    max-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  }
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;

  img {
    width: 70%;
    height: auto;
    margin: 23px;
  }
`;
