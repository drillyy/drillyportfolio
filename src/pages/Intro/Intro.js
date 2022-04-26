import React from "react";
import { Link } from "react-scroll";
import Jump from "react-reveal/Jump";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import Fade from "react-reveal/Fade";
import "./Intro.css";

const styles = {
  component: {
    height: "100vh",
    backgroundImage: "url(https://wallpapercave.com/wp/wp2578195.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: "left",
  },
  padding: {
    padding: "28em 0em 0em 12%",
  },
};

const Intro = () => {
  return (
    <div className="intro" style={styles.component}>
            <div style={styles.padding}>
            <Fade>
      <div className="intro-container">
        <h1>Hi, Drilly here</h1>
        <br></br>
        <h3>
          Full-stack software developer with huge passion for
          blockchain, data science and sports. <i>How can I help you?</i>
        </h3>
        <br></br>
        <Jump>
              <Link to="about" spy={true} smooth={true}>
                <KeyboardArrowDownOutlinedIcon
                  className="intro-down-arrow"
                  style={{ fontSize: "3em", backgroundColor: 'white', borderRadius: '3em'}}
                />
              </Link>
            </Jump>
      </div>        </Fade>

    </div></div>
  );
};

export default Intro;
