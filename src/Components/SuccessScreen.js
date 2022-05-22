import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./DefaultButton";

export default function SuccessScreen() {
  const { state } = useLocation();
  const [newCpf, setNewCpf] = useState("");
  const navigate = useNavigate();

  function clearInfos() {
    navigate("/", { replace: true });
  }

  function cpfPattern() {
    let arr = [];
    for (let i = 0; i < state.body.cpf.length; i++) {
      const letter = state.body.cpf[i];
      arr.push(letter);
      if (i === 2 || i === 5) {
        arr.push(".");
      }
      if (i === 8) {
        arr.push("-");
      }
    }
    setNewCpf(arr.join(""));
  }
  useEffect(() => {
    cpfPattern();
  }, []);
  return (
    <>
      <SuccessMessage>
        Pedido feito
        <br />
        com sucesso!
      </SuccessMessage>
      <div>
        <StyledInfo>
          <p>Filme e sessão</p>
          <div>{state.movieInfo.movie.title}</div>
          <div>{`${state.movieInfo.day.date} ${state.movieInfo.name}`}</div>
        </StyledInfo>
        <StyledInfo>
          <p>Ingressos</p>
          {state.seatNumbers.map((number) => (
            <div>{`Assento ${number + 1}`}</div>
          ))}
        </StyledInfo>
        <StyledInfo>
          <p>Comprador</p>
          <div>{`Nome: ${state.body.name}`}</div>
          <div>{`CPF: ${newCpf}`}</div>
        </StyledInfo>
      </div>
      <PositionDiv>
        <Button onClick={clearInfos} width={"225px"}>
          Voltar pra Home
        </Button>
      </PositionDiv>
    </>
  );
}

const PositionDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 110px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  color: #247a6b;
`;

const StyledInfo = styled.div`
  width: 100%;
  min-height: 110px;
  margin-bottom: 12px;
  color: #293845;
  margin-left: 28px;
  p {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 6px;
  }
  div {
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
  }
`;
