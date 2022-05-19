import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MovieSelection from "./MovieSelection";
import SeatsSelection from "./SeatsSelection";
import ShowtimeSelection from "./ShowtimeSelection";
import SuccessScreen from "./SuccessScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<MovieSelection />} />
        <Route path={"/filme/:movieId"} element={<ShowtimeSelection />} />
        <Route path={"/sessao/:showtimeId"} element={<SeatsSelection />} />
        <Route path={"/sucesso"} element={<SuccessScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
