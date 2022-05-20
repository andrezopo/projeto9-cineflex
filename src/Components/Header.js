import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderStyle>CINEFLEX</HeaderStyle>
    </>
  );
}

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  font-weight: 400;
  color: #e8833a;
  height: 68px;
  background-color: #c3cfd9;
`;
