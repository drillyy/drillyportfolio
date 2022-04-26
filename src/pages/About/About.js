import { Link } from "react-scroll";

const styles = {
    component: {
      minHeight: "100vh",
      backgroundColor: "rgb(235, 236, 232)",
      padding: "2em 0em 0em 0em",
    },
    header: {
      fontFamily: "Playfair Display, serif",
      fontSize: "1.5em",
      textAlign: "center",
    },
  };

const About = () => {
    return (
      <section className="about" style={styles.component}>
          Hello world
              </section>
    );
  };
  
  export default About;