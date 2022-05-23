import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "./DefaultButton";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <HeaderStyle>CINEFLEX</HeaderStyle>
      {location.pathname === "/" ? null : (
        <Button onClick={() => navigate(-1)} width={"60px"}>
          Voltar
        </Button>
      )}
    </div>
  );
}

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 34px;
  font-weight: 400;
  color: #e8833a;
  height: 68px;
  background-color: #c3cfd9;
`;
