import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./DefaultButton";

export default function SeatsForm({ SeatsIds }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  function getInfos(e) {
    e.preventDefault();
    const body = {
      ids: SeatsIds,
      name,
      cpf,
    };
    const request = axios.post(
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
      body
    );
    request.then((res) => console.log(res));
    setCpf("");
    setName("");
  }

  return (
    <StyledForm>
      <div>
        <label htmlFor={"name"}>
          <p>{"Nome do comprador: "}</p>
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id={"name"}
          type={"text"}
          placeholder={"Digite seu nome..."}
          required
        />
      </div>
      <div>
        <label htmlFor={"CPF"}>
          <p>{"CPF do comprador: "}</p>
        </label>
        <input
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          id={"CPF"}
          type={"text"}
          placeholder={"Digite seu CPF..."}
          required
        />
      </div>
      <span onClick={getInfos}>
        <Button>Reservar assento(s)</Button>
      </span>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  color: #293845;
  div {
    width: 100%;
  }

  input {
    height: 50px;
    width: 100%;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    margin-bottom: 6px;
    ::placeholder {
      font-size: 18px;
      font-weight: 400;
      line-height: 21px;
      color: #afafaf;
      font-style: italic;
    }
  }
`;
