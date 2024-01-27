import React from "react";
import { useState, useEffect } from "react";
import "./App.css"; // Assuming you want to import App.css
import { Link, useNavigate, useLocation } from "react-router-dom";

//{openessMaxWO, openessMaxO, openessMinC, openessMidC,openessMinHC, openessMaxC,openessMidHC,openessMaxHC}
function X_FactorC() {
  // specific values for different levels of openness

  const [openessMaxWO, setOpenessMaxWO] = useState(9);
  const [openessMaxO, setOpenessMaxO] = useState(8);
  // openessMinC is set to 5 and not 6 because it is the lowest value out of the three
  // despite it being a "maximum" value in its usage
  const [openessMinC, setOpenessMinC] = useState(5);
  const [openessMidC, setOpenessMidC] = useState(6);
  const [openessMaxC, setOpenessMaxC] = useState(9);
  // Heavily contested
  const [openessMinHC, setOpenessMinHC] = useState(3);
  const [openessMidHC, setOpenessMidHC] = useState(4);
  const [openessMaxHC, setOpenessMaxHC] = useState(8);

  // make the buttons togglables
  const [STM, setSTM] = useState(true);
  const [MAHOMES, setMAHOMES] = useState(true);
  const [deepPass, setDeepPass] = useState(true);
  const [mossed, setMossed] = useState(true);
  const [alwaysOpen, setAlwaysOpen] = useState(true);
  const [fastThinking, setfastThinking] = useState(true);
  const [slantSlayer, setSlantSlayer] = useState(true);
  const [deepPassDemon, setDeepPassDemon] = useState(true);
  const [ballHawk, setBallHawk] = useState(true);
  const [swatted, setSwatted] = useState(true);

  // handle swatting
  const [max, setMax] = useState(10);

  const [reset, setReset] = useState("");
  //navigate and send data
  const navigate = useNavigate();

  function handleMovement() {
    navigate("/AppC", {
      state: {
        openessMaxWO: openessMaxWO,
        openessMaxO: openessMaxO,
        openessMinC: openessMinC,
        openessMidC: openessMidC,
        openessMaxC: openessMaxC,
        openessMinHC: openessMinHC,
        openessMidHC: openessMidHC,
        openessMaxHC: openessMaxHC,
        swatted: swatted,
        max: max,
      },
    });
  }

  const handleToggle = (pass) => {
    switch (pass) {
      case "STM":
        setSTM(!STM);
        break;
      case "MAHOMES":
        setMAHOMES(!MAHOMES);
        break;
      case "deepPass":
        setDeepPass(!deepPass);
        break;
      case "mossed":
        setMossed(!mossed);
        break;
      case "alwaysOpen":
        setAlwaysOpen(!alwaysOpen);
        break;
      case "fastThinking":
        setfastThinking(!fastThinking);
        break;
      case "slantSlayer":
        setSlantSlayer(!slantSlayer);
        break;
      case "deepPassDemon":
        setDeepPassDemon(!deepPassDemon);
        break;
      case "swatted":
        setSwatted(!swatted);
        break;
      default:
        setBallHawk(!ballHawk);
    }
  };

  //Make sure state is preserved
  useEffect(() => {
    // values
    setOpenessMaxWO(JSON.parse(window.localStorage.getItem("openessMaxWO")));
    setOpenessMaxO(JSON.parse(window.localStorage.getItem("openessMaxO")));
    setOpenessMinC(JSON.parse(window.localStorage.getItem("openessMinC")));
    setOpenessMidC(JSON.parse(window.localStorage.getItem("openessMidC")));
    setOpenessMaxC(JSON.parse(window.localStorage.getItem("openessMaxC")));
    setOpenessMinHC(JSON.parse(window.localStorage.getItem("openessMinHC")));
    setOpenessMidHC(JSON.parse(window.localStorage.getItem("openessMidHC")));
    setOpenessMaxHC(JSON.parse(window.localStorage.getItem("openessMaxHC")));
    setMax(JSON.parse(window.localStorage.getItem("max")));
    //toggle states
    setSTM(JSON.parse(window.localStorage.getItem("STM")));
    setMAHOMES(JSON.parse(window.localStorage.getItem("MAHOMES")));
    setDeepPass(JSON.parse(window.localStorage.getItem("deepPass")));
    setMossed(JSON.parse(window.localStorage.getItem("mossed")));
    setAlwaysOpen(JSON.parse(window.localStorage.getItem("alwaysOpen")));
    setfastThinking(JSON.parse(window.localStorage.getItem("fastThinking")));
    setSlantSlayer(JSON.parse(window.localStorage.getItem("slantSlayer")));
    setDeepPassDemon(JSON.parse(window.localStorage.getItem("deepPassDemon")));
    setBallHawk(JSON.parse(window.localStorage.getItem("ballHawk")));
    setSwatted(JSON.parse(window.localStorage.getItem("swatted")));
  }, []);

  useEffect(() => {
    //values
    window.localStorage.setItem("openessMaxWO", openessMaxWO);
    window.localStorage.setItem("openessMaxO", openessMaxO);
    window.localStorage.setItem("openessMinC", openessMinC);
    window.localStorage.setItem("openessMidC", openessMidC);
    window.localStorage.setItem("openessMaxC", openessMaxC);
    window.localStorage.setItem("openessMinHC", openessMinHC);
    window.localStorage.setItem("openessMidHC", openessMidHC);
    window.localStorage.setItem("openessMaxHC", openessMaxHC);
    window.localStorage.setItem("max", max);
    //toggle states
    window.localStorage.setItem("STM", STM);
    window.localStorage.setItem("MAHOMES", MAHOMES);
    window.localStorage.setItem("deepPass", deepPass);
    window.localStorage.setItem("mossed", mossed);
    window.localStorage.setItem("alwaysOpen", alwaysOpen);
    window.localStorage.setItem("fastThinking", fastThinking);
    window.localStorage.setItem("slantSlayer", slantSlayer);
    window.localStorage.setItem("deepPassDemon", deepPassDemon);
    window.localStorage.setItem("ballHawk", ballHawk);
    window.localStorage.setItem("swatted", swatted);
  }, [
    openessMaxWO,
    openessMidC,
    openessMinHC,
    swatted,
    openessMaxHC,
    STM,
    MAHOMES,
    deepPass,
    mossed,
    alwaysOpen,
    fastThinking,
    slantSlayer,
    deepPassDemon,
    ballHawk,
    swatted,
  ]);

  function x_factor(Adjust) {
    switch (Adjust) {
      case "STM": //was +1 to all passing
        if (MAHOMES && deepPass) {
          setOpenessMaxWO(
            STM
              ? openessMaxWO < 10
                ? openessMaxWO + 1
                : openessMaxWO + 0
              : openessMaxWO - 1
          );
          setOpenessMaxO(
            STM
              ? openessMaxO < 10
                ? openessMaxO + 1
                : openessMaxO + 0
              : openessMaxO - 1
          );
          setOpenessMinC(STM ? openessMinC + 1 : openessMinC - 1);
          setOpenessMidC(STM ? openessMidC + 1 : openessMidC - 1);
          setOpenessMinHC(STM ? openessMinHC + 1 : openessMinHC - 1);
          setOpenessMidHC(STM ? openessMidHC + 1 : openessMidHC - 1);
        }
        break;
      case "alwaysOpen": // was +1 to open passing
        setOpenessMaxWO(
          alwaysOpen
            ? openessMaxWO < 10
              ? openessMaxWO + 1
              : openessMaxWO + 0
            : openessMaxWO - 1
        );
        setOpenessMaxO(
          alwaysOpen
            ? openessMaxO < 10
              ? openessMaxO + 1
              : openessMaxO + 0
            : openessMaxO - 1
        );
        break;
      case "MAHOMES": // was +1 contested passing
        if (STM && deepPass) {
          setOpenessMinC(MAHOMES ? openessMinC + 1 : openessMinC - 1);
          setOpenessMidC(MAHOMES ? openessMidC + 1 : openessMidC - 1);
          setOpenessMinHC(MAHOMES ? openessMinHC + 1 : openessMinHC - 1);
          setOpenessMidHC(MAHOMES ? openessMidHC + 1 : openessMidHC - 1);
        }
        break;
      case "mossed": // was +1 contested passing
        setOpenessMinC(mossed ? openessMinC + 1 : openessMinC - 1);
        setOpenessMidC(mossed ? openessMidC + 1 : openessMidC - 1);
        setOpenessMinHC(mossed ? openessMinHC + 1 : openessMinHC - 1);
        setOpenessMidHC(mossed ? openessMidHC + 1 : openessMidHC - 1);
        break;
      case "slantSlayer":
        setOpenessMaxWO(slantSlayer ? openessMaxWO - 1 : openessMaxWO + 1);
        setOpenessMaxO(slantSlayer ? openessMaxO - 1 : openessMaxO + 1);
        setOpenessMinC(slantSlayer ? openessMinC - 1 : openessMinC + 1);
        setOpenessMidC(slantSlayer ? openessMidC - 1 : openessMidC + 1);
        setOpenessMinHC(slantSlayer ? openessMinHC - 1 : openessMinHC + 1);
        setOpenessMidHC(slantSlayer ? openessMidHC - 1 : openessMidHC + 1);
        break;
      case "deepPassDemon":
        setOpenessMaxWO(deepPassDemon ? openessMaxWO - 1 : openessMaxWO + 1);
        setOpenessMaxO(deepPassDemon ? openessMaxO - 1 : openessMaxO + 1);
        setOpenessMinC(deepPassDemon ? openessMinC - 1 : openessMinC + 1);
        setOpenessMidC(deepPassDemon ? openessMidC - 1 : openessMidC + 1);
        setOpenessMinHC(deepPassDemon ? openessMinHC - 1 : openessMinHC + 1);
        setOpenessMidHC(deepPassDemon ? openessMidHC - 1 : openessMidHC + 1);
        break;
      case "ballHawk":
        setOpenessMaxHC(ballHawk ? openessMaxHC - 1 : openessMaxHC + 1);
        setOpenessMaxC(ballHawk ? openessMaxC - 1 : openessMaxC + 1);
        break;
      case "deepPass":
        if (MAHOMES && STM) {
          setOpenessMaxHC(deepPass ? openessMaxHC + 1 : openessMaxHC - 1);
          setOpenessMaxC(deepPass ? openessMaxC + 1 : openessMaxC - 1);
        }
        break;
      case "fastThinking":
        setOpenessMaxHC(fastThinking ? openessMaxHC + 1 : openessMaxHC - 1);
        setOpenessMaxC(fastThinking ? openessMaxC + 1 : openessMaxC - 1);
        break;
      case "swatted":
        setMax(swatted ? 11 : 10);
        break;
      default:
        // reset values
        setOpenessMaxWO(9);
        setOpenessMaxO(8);
        setOpenessMinC(5);
        setOpenessMidC(6);
        setOpenessMaxC(9);
        setOpenessMinHC(3);
        setOpenessMidHC(4);
        setOpenessMaxHC(8);
        setMax(10);
        setSwatted(true);
        setSTM(true);
        setAlwaysOpen(true);
        setBallHawk(true);
        setDeepPass(true);
        setDeepPassDemon(true);
        setfastThinking(true);
        setMAHOMES(true);
        setMossed(true);
        setSlantSlayer(true);
        break;
    }
  }

  function handleReset() {
    setReset("X-Factors have been reset");
    setTimeout(() => {
      setReset("");
    }, 2000);
  }
  return (
    <div>
      <h1>X-Factors</h1>

      <div id="container">
        <div id="title1">
          <h2>QuarterBacks</h2>
        </div>
        <div id="title2">
          <h2>Wide Recievers</h2>
        </div>
        <div id="title3">
          <h2>Defensive Backs</h2>
        </div>
        {/* Quarterback X-Factors */}
        <button
          className={STM ? "on" : "off"}
          id="Short"
          onClick={() => {
            x_factor("STM");
            handleToggle("STM");
            handleClick();
          }}
        >
          Short Term Memory
        </button>
        <button
          className={MAHOMES ? "on" : "off"}
          id="MAHOMES"
          onClick={() => {
            x_factor("MAHOMES");
            handleToggle("MAHOMES");
          }}
        >
          MAHOMES
        </button>
        <button
          className={deepPass ? "on" : "off"}
          id="deep"
          onClick={() => {
            x_factor("deepPass");
            handleToggle("deepPass");
          }}
        >
          He's down there somewhere
        </button>
        {/* Wide Receiver X-Factors */}
        <button
          className={mossed ? "on" : "off"}
          id="Mossed"
          onClick={() => {
            x_factor("mossed");
            handleToggle("mossed");
          }}
        >
          Mossed
        </button>
        <button
          className={alwaysOpen ? "on" : "off"}
          id="open"
          onClick={() => {
            x_factor("alwaysOpen");
            handleToggle("alwaysOpen");
          }}
        >
          I'm always open
        </button>
        <button
          className={fastThinking ? "on" : "off"}
          id="Fast"
          onClick={() => {
            x_factor("fastThinking");
            handleToggle("fastThinking");
          }}
        >
          Fast Thinking
        </button>
        {/* DB X-Factors */}
        <button
          className={slantSlayer ? "on" : "off"}
          id="Slant"
          onClick={() => {
            x_factor("slantSlayer");
            handleToggle("slantSlayer");
          }}
        >
          Slant Slayer
        </button>
        <button
          className={deepPassDemon ? "on" : "off"}
          id="DPD"
          onClick={() => {
            x_factor("deepPassDemon");
            handleToggle("deepPassDemon");
          }}
        >
          Deep Pass Demon
        </button>
        <button
          className={ballHawk ? "on" : "off"}
          id="Ball"
          onClick={() => {
            x_factor("ballHawk");
            handleToggle("ballHawk");
          }}
        >
          Ball Hawk
        </button>
        <button
          className={swatted ? "on" : "off"}
          id="Swatted"
          onClick={() => {
            x_factor("swatted");
            handleToggle("swatted");
          }}
        >
          Swatted
        </button>
        <button id="Back" onClick={handleMovement}>
          Back
        </button>
        <button
          id="Reset"
          onClick={() => {
            x_factor("");
            handleReset();
          }}
        >
          Reset All X-Factors
        </button>
      </div>
      <h3 id="ack">{reset}</h3>
    </div>
  );
}

export default X_FactorC;
