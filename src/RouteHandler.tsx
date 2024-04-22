import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import PatientProfile from "./PatientProfile/PatientProfile";

const RouteHandler = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/profiles/:id?" element={<PatientProfile />}>
      <Route index></Route>
      <Route path="medical-history"></Route>
      <Route path="consulation"></Route>
      <Route path="action-plans"></Route>
      <Route path="files"></Route>
      <Route path="stats"></Route>
    </Route>
  </Routes>
);

export default RouteHandler;