import React from "react";
// import Header from './include/header'
// import Footer from './include/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LeftSideBar from './include/LeftSideBar'
import Inside from "./Dashbaord/Inside";
import Home from "./Dashbaord/Home";
import Cricket from "./Dashbaord/Cricket";
import Results from "./Dashbaord/Result";
import LiveCasino from "./Dashbaord/LiveCasino";
import SlotGames from "./Dashbaord/SlotGames";
import Football from "./Dashbaord/Football";
import Profile from "./include/Profile";
import TennisInside from "./Dashbaord/TennisInside";
import Tennis from "./Dashbaord/Tennis";
// const Cricket = React.lazy(() => import('./Dashbaord/Cricket'))
import FootballInside from "./Dashbaord/FootballInside";
import PageNotFound from "./PageNotFound";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" component={PageNotFound} />

          <Route path="/">
            <Route path="/" element={<Home />} />
            <Route path="/cricket" element={<Cricket />} />
            <Route path="/results" element={<Results />} />
            <Route path="/inside" element={<Inside />} />
            <Route path="/liveCasino" element={<LiveCasino />} />
            <Route path="/slotGames" element={<SlotGames />} />
            {/* <Route path="/cardGames" element={<CardGames />} /> */}
            <Route path="/tennis" element={<Tennis />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/footballInside" element={<FootballInside />} />
            <Route path="/football" element={<Football />} />
            <Route path="/tennisInside" element={<TennisInside />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
