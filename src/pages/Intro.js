import bill from "../images/bill.png";
import ellipse from "../images/ellipse.svg";
import scrollDown from "../hooks/scrollDown";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";

export default function Intro(props) {
  function handleClick() {
    scrollDown(props.aboutLink);
  }

  function handleScroll() {
    scrollDown(props.aboutLink);
  }

  return (
    <div className="Intro" ref={props.refProp}>
      <div className="Intro--Title">
        <h1>
          <span>Hi! I'm Drilly</span>
          <br /> Web Developer
        </h1>
      </div>
      <div className="Intro--Container">
        <img
          className="Intro--Image"
          src={bill}
          alt="blonde man with sunglasses"
        />
        <div className="Summary">
          <h2>
            How can I help <br />
            <strong>
              <u>you?</u>
            </strong>
          </h2>
          <img className="Intro--Arrow" src={ellipse} alt="white arrow" />
          <p>
            I am a full-stack software developer with huge passion for web
            development, data science and sports.
          </p>
          <button onClick={handleClick}>Chat with Me</button>
        </div>
      </div>
      <KeyboardArrowDownOutlinedIcon
        className="downArrow"
        onClick={handleScroll}
      />
    </div>
  );
}
