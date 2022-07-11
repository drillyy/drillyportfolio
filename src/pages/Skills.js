import python from "../images/python.png";
import react from "../images/react.png";
import django from "../images/django.png";
import jupyter from "../images/jupyter.png";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import scrollDown from "../hooks/scrollDown";

export default function Skills(props) {
  const skillsInfo = [
    {
      title: "Languages",
      img: python,
      alt: "python logo",
      ul: ["Python", "HTML", "CSS", "Javascript"],
    },
    {
      title: "Frontend",
      img: react,
      alt: "react logo",
      ul: ["React", "HTML5", "CSS3/SASS", "Bootstrap/MaterialUI"],
    },
    {
      title: "Backend",
      img: django,
      alt: "django logo",
      ul: ["Django", "Firebase", "Node.js", "REST/GraphQL"],
    },
    {
      title: "Tools & Methods",
      img: jupyter,
      alt: "jupyter notebook logo",
      ul: ["Jupyter Notebook", "Git/GitHub", "Pandas/Numpy", "Tensorflow", "Jira"],
    }
  ];

  function handleScroll() {
    scrollDown(props.projectsLink)
  }

  return (
    <div className="Skills" ref={props.refProp}>
      <h1 className="Skills--Title">Skills</h1>
      <div className="Skills--Cards">
      {skillsInfo.map((card) => {
        return (
          <div className="Skills--Card">
            <h2>{card.title}</h2>
            <img src={card.img} alt={card.alt} />
            <ul>
            {card.ul.map(li => {
              return (
                <li>{li}</li>)})}
            </ul>
          </div>
        );
      })}
      </div>
      <KeyboardArrowDownOutlinedIcon className='downArrow' onClick={handleScroll}/>
    </div>
  );
}
