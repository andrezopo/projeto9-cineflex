import { useLocation } from "react-router-dom";

export default function SuccessScreen() {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <div>Parabéns, sua sessão foi marcada com sucesso!</div>
    </>
  );
}
