import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./AppR.css";
import X_Factor from "./X_FactorC";

const AppR = () => {
  const [vis, setVis] = useState("");
  const [on, setOn] = useState("ON");
  const [swatVis, setSwatVis] = useState("");
  const [min, setMin] = useState("");
  const [mid, setMid] = useState("");
  const [newMax, setNewMax] = useState("");
  const [dotOne, setDotOne] = useState(" ");
  const [dotTwo, setDotTwo] = useState(" ");
  const [dotThree, setDotThree] = useState(" ");
  const [ellipse, setEllipse] = useState("...");
  const [delay, toggleDelay] = useState(true);

  //recieve data
  const { state } = useLocation();

  const {
    openessMaxWO,
    openessMaxO,
    openessMinC,
    openessMidC,
    openessMaxC,
    openessMinHC,
    openessMidHC,
    openessMaxHC,
    max,
    swatted,
  } = state;

  function animateDots(args) {
    setEllipse("");
    setTimeout(() => {
      setDotOne(".");
    }, 250);
    setTimeout(() => {
      setDotTwo(".");
    }, 750);
    setTimeout(() => {
      setDotThree(".");
    }, 1250);
    setTimeout(() => {
      setDotOne(" ");
      setDotTwo(" ");
      setDotThree(" ");
    }, 1750);
  }

  function pass(Openness) {
    // initialize variables
    let min = 1;
    // specific values for different levels of openness
    // handle randomness
    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let choice = randomIntFromInterval(min, max);

    switch (Openness) {
      case "Wide Open":
        if (choice >= 1 && choice <= openessMaxWO) {
          console.log(openessMaxWO);
          setVis("Caught");
          break;
        } else if (choice == 11) {
          setVis("Swatted");
          break;
        } else {
          setVis("Dropped");
          break;
        }
      case "Open":
        if (choice >= 1 && choice <= openessMaxO) {
          setVis("Caught");
          break;
        } else if (choice == 11) {
          setVis("Swatted");
          break;
        } else {
          setVis("Dropped");
          break;
        }
      case "Contested":
        if (choice >= 1 && choice <= openessMinC) {
          setVis("Caught!");
          break;
        } else if (choice >= openessMidC && choice <= openessMaxC) {
          setVis("Broken Up");
          break;
        } else if (choice == 11) {
          setVis("Swatted");
        } else {
          setVis("Intercepted!");
          break;
        }
      case "Heavily Contested":
        if (choice >= 1 && choice <= openessMinHC) {
          setVis("Caught!");
          break;
        } else if (choice >= openessMidHC && choice <= openessMaxHC) {
          setVis("Broken Up");
          break;
        } else if (choice == 11) {
          setVis("Swatted");
          break;
        } else {
          setVis("Intercepted!");
          break;
        }
      default:
        setVis("");
        break;
    }
  }

  function displayChance(arg) {
    setVis("");
    switch (arg) {
      case "Wide Open":
        setMin(openessMaxWO < 10 ? "1 - " + openessMaxWO : "1 - 10 ");
        setMid(openessMaxWO < 10 ? 10 + "" : "");
        setNewMax("");
        break;
      case "Open":
        setMin("1 - " + openessMaxO);
        setMid(
          openessMaxO == 8
            ? 9 + " - " + 10 + ""
            : openessMaxO == 9
            ? 10 + ""
            : ""
        );
        setNewMax("");
        break;
      case "Contested":
        setMin("1 - " + openessMinC);
        setMid(openessMinC + 1 + " - " + openessMaxC);
        setNewMax(openessMaxC > 8 ? (openessMaxC == 10 ? "" : "10") : "9 - 10");
        break;
      case "Heavily Contested":
        setMin("1 - " + openessMinHC);
        setMid(openessMinHC + 1 + " - " + openessMaxHC);
        setNewMax(
          openessMaxHC > 8
            ? openessMaxHC == 10
              ? ""
              : "10"
            : openessMaxC + " - 10"
        );
        break;
    }

    if (delay) {
      animateDots(arg);
      setTimeout(() => {
        animateDots(arg);
      }, 2250);
      setTimeout(() => {
        setEllipse("...");
        pass(arg);
      }, 4000);
    } else {
      pass(arg);
    }
  }
  function handleToggle() {
    toggleDelay(!delay);
    setOn(delay ? "OFF" : "ON");
  }

  return (
    <>
      <div id="R_Full"></div>
      <div className="containerR">
        <h1 id="title">Lamar drops back, throws a</h1>
        <div className="buttons">
          <button
            className="Passes"
            id="Wide Open"
            onClick={() => displayChance("Wide Open")}
          >
            Wide Open
          </button>
          <button
            className="Passes"
            id="Open"
            onClick={() => displayChance("Open")}
          >
            Open
          </button>
          <button
            className="Passes"
            id="Contested"
            onClick={() => displayChance("Contested")}
          >
            Contested
          </button>
          <button
            className="Passes"
            id="Heavily Contested"
            onClick={() => displayChance("Heavily Contested")}
          >
            Heavily Contested
          </button>
        </div>

        <h1 id="subtitle">
          pass and its{ellipse}
          {dotOne}
          {dotTwo}
          {dotThree}
        </h1>
        <div id="displayWrapper">
          <h1 id="display">{vis}</h1>
        </div>
        <button id="clear" onClick={() => pass("clear")}>
          Clear
        </button>

        <Link to="/X_FactorR" className="Link">
          <button id="X-Factors_"> X-Factors</button>
        </Link>

        <h2 id="current">Current Chances:</h2>
        <div id="chances">
          <div className="Upper" id="catch">
            <h2>Catch:</h2>
          </div>
          <div className="Upper" id="drop">
            <h2>Drop:</h2>
          </div>
          <div className="Upper" id="int">
            <h2>Intercepted:</h2>
          </div>
          <div className="Lower" id="catch_chance">
            <h2>{min}</h2>
          </div>
          <div className="Lower" id="drop_chance">
            <h2>{mid}</h2>
          </div>
          <div className="Lower" id="int_chance">
            <h2>{newMax}</h2>
          </div>
        </div>
        <Link to="/" className="Link2">
          <button id="HomeR"> Home</button>
        </Link>
        <h2 id="T-Text">Toggle Delay</h2>
        <button
          className={delay ? "onR" : "offR"}
          id="Toggle"
          onClick={handleToggle}
        >
          {on}
        </button>
        <h2 id="TeamName">Go To</h2>
        <Link to="/GameC" className="Link2">
          <button className="teams" id="team">
            Chiefs
          </button>
        </Link>
      </div>
    </>
  );
};

export default AppR;
//Wide Open 1 - {openessMaxWO} Open 1 - { openessMaxO} Contested 1 - { openessMinC} | {openessMidC} -  { openessMaxC} | { openessMaxC}  - {max} H Contested 1 - { openessMinHC} |
//{ openessMidHC} - { openessMaxHC} | { openessMaxHC} - {max}
