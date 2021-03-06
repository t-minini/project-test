import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CreateList } from "./pages/CreateList";
import { DetailList } from "./pages/DetailList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-list" element={<CreateList />} />
        <Route path="/detail-list/:_id" element={<DetailList />} />
      </Routes>
    </>
  );
}

export default App;
