import styled from "styled-components";

export default function Footer({ movieName, showtime, movieImage, time }) {
  return (
    <Bottom>
      <img src={movieImage} alt="" />
      {showtime ? (
        <>
          <div>{movieName}</div> <div>{`${showtime.weekday} - ${time}`}</div>
        </>
      ) : (
        <div>{movieName}</div>
      )}
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
