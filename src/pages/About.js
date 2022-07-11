import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faUserSecret, faCode, faPepperHot, faSchool } from '@fortawesome/free-solid-svg-icons'
import scrollDown from '../hooks/scrollDown'
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";

export default function About (props) {

  function handleScroll() {
    scrollDown(props.skillsLink)
  }

  return(
    <div className='About' ref={props.refProp}>
    <h1>About</h1>
    <section className="About--Text">
        <p><FontAwesomeIcon icon={faUserSecret} /> Anonymous self-taught Python tinkerer turned full-stack developer looking to break into the blockchain industry <FontAwesomeIcon icon={faUserSecret} /></p>
        <br></br>
        <p><FontAwesomeIcon icon={faCode} /> Passionate about blockchain technology and have started to gain experience writing smart contracts in Solidity <FontAwesomeIcon icon={faCode} /></p>
      <br></br>
      <p><FontAwesomeIcon icon={faPepperHot} /> 26. He/Him. English. London/Remote <FontAwesomeIcon icon={faPepperHot} /></p>
      <br></br>
      <p><FontAwesomeIcon icon={faSchool} /> Graduated with General Engineering Degree, background in automotive engineering <FontAwesomeIcon icon={faSchool} />
      </p>
      <br></br>
      <p><FontAwesomeIcon icon={faFutbol} /> Football, cricket and fitness enthusiast <FontAwesomeIcon icon={faFutbol} /></p>
    </section>
    <KeyboardArrowDownOutlinedIcon className='downArrow' onClick={handleScroll}/>
    </div>
  )
}