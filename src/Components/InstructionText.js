import styled from "styled-components";

export default function InstructionText({ instruction }) {
  return <Instruction>{`Selecione o${instruction}`}</Instruction>;
}

const Instruction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 110px;
  font-size: 24px;
  font-weight: 400;
  color: #293845;
`;
