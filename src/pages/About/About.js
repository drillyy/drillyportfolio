import React from "react";
import Container from "@material-ui/core/Container";
import { Link } from "react-scroll";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import "./About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faUserSecret, faCode, faPepperHot, faSchool } from '@fortawesome/free-solid-svg-icons'


const styles = {
    component: {
      minHeight: "100vh",
      background: "linear-gradient(180deg, rgba(31,78,119,1) 0%, rgba(46,104,146,1) 35%, rgba(217,101,103,1) 100%)",
      padding: "0em 0em 0em 0em",
    },
    header: {
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "1.5em",
      textAlign: "center",
    },
  };

const About = () => {
    return (
        <section className="about" style={styles.component}>
        <Container>
          <div className="about-container">
            <Fade>
              <section className="about-text">
              <a href="https://github.com/drillyy"><img className="about-image" src="https://ftblcult.com/wp-content/uploads/2020/04/alan-shearer-blackburn.png" alt="Shearer"/></a>
                <h1 style={styles.header}>About</h1>
                  <p><FontAwesomeIcon icon={faUserSecret} /> Anonymous self-taught Python tinkerer turned full-stack developer looking to break into the blockchain industry <FontAwesomeIcon icon={faUserSecret} /></p>
                  <br></br>
                  <p><FontAwesomeIcon icon={faCode} /> Passionate about blockchain technology and have started to gain experience writing smart contracts in Solidity <FontAwesomeIcon icon={faCode} /></p>
                <br></br>
                <p><FontAwesomeIcon icon={faPepperHot} /> 26. He/Him. English. London/Remote <FontAwesomeIcon icon={faPepperHot} /></p>
                <br></br>
                <p><FontAwesomeIcon icon={faSchool} /> Graduated with General Engineering Degree, background in automotive engineering <FontAwesomeIcon icon={faSchool} />
                </p>
                <br></br>
                <p><FontAwesomeIcon icon={faFutbol} /> Football, cricket and fitness ethusiast <FontAwesomeIcon icon={faFutbol} /></p>
              </section>
            </Fade>
          </div>
        </Container>
        <section style={{ textAlign: "center" }}>
        <Jump>
          <Link to="tech-skills" spy={true} smooth={true}>
            <KeyboardArrowDownOutlinedIcon
              className="about-down-arrow"
              style={{ fontSize: "3em", backgroundColor: 'white', borderRadius: '3em', marginTop: '0.75em'}}
              />
          </Link>
        </Jump>
      </section>
    </section>
    );
  };
  
  export default About;