import { useState, useEffect } from "react";
import { SocialIcon } from 'react-social-icons';
import scrollDown from "../hooks/scrollDown";

export default function Navbar(props) {
  const [navbar, setNavbar] = useState("rgba(16, 18, 22, 0)");

  function changeNavbar() {
      setNavbar(`rgba(16, 18, 22, ${window.scrollY/40}`);
  }

  function handleReturn() {
    scrollDown(props.introLink)
  }

  const iconStyle = {
    height: "25px", width: "25px", margin: "5px"
  }

  useEffect(() => {
    changeNavbar()
    window.addEventListener("scroll", changeNavbar)
});
  return (
    <div className="Navbar" style={{backgroundColor: navbar}}>
      <div className="Navbar--Menu">Menu</div>
      <div className="Navbar--Drilly" onClick={handleReturn}>Drilly.</div>
      <div className="Navbar--Socials">
        <SocialIcon url="https://github.com/drillyy" bgColor="white" style={iconStyle}/>
        <SocialIcon url="https://twitter.com/drillyh" bgColor="white" style={iconStyle}/>
        <SocialIcon url="https://medium.com/@drilly" bgColor="white" style={iconStyle}/>
        </div>
    </div>
  );
}
