import React, { useState, useEffect } from "react";
import AppC from "./AppC";
import X_FactorC from "./X_FactorC";
import GameC from "./GameC";
import HomePage from "./HomePage";
import AppR from "./AppR";
import X_FactorR from "./X_FactorR";
import GameR from "./GameR";
import { Route, Routes } from "react-router-dom";

function Home() {
  // <Route path = "Game" element = {<Game/>}/>
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AppC" element={<AppC />} />
        <Route path="/X_FactorC" element={<X_FactorC />} />
        <Route path="/GameC" element={<GameC />} />

        <Route path="/AppR" element={<AppR />} />
        <Route path="/X_FactorR" element={<X_FactorR />} />
        <Route path="/GameR" element={<GameR />} />
      </Routes>
    </div>
  );
}

export default Home;

/*
    <App pass={pass} vis={vis} />;
    <h2>{openessMaxWO}{openessMinHC}</h2>
    <X_Factor x_factor={x_factor} openessMaxWO={openessMaxWO}/>
    </div>
*/
