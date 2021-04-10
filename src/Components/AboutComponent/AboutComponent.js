import './AboutComponent.css';
import {useState} from 'react';
import AboutMe from './SubComponent/AboutMe';
import Publications from './SubComponent/Publications';




function AboutComponent() { 

    const [displayContent,setDisplayContent] = useState("about");

    function buttonClickedAboutMe(){
        setDisplayContent("about");
        const aboutMeButton = document.getElementById("about-me");
        const publicationsButton = document.getElementById("publications");
        if(!aboutMeButton.classList.contains("background-grey") && 
        !publicationsButton.classList.contains("background-yellow"))
        return ;
        aboutMeButton.classList.remove("background-grey");
        publicationsButton.classList.remove("background-yellow");
    }
    
    function buttonClickedPublish() {
        setDisplayContent("publications")
        const aboutMeButton = document.getElementById("about-me");
        const publicationsButton = document.getElementById("publications");
        if(aboutMeButton.classList.contains("background-grey") && 
        publicationsButton.classList.contains("background-yellow"))
        {
        return ;
        }
        aboutMeButton.classList.add("background-grey");
        publicationsButton.classList.add("background-yellow");
    }

    return (
        <div id="about" className="clsAbout">
            <h2>ABOUT</h2>
            <div className="about-content">
                {displayContent === "about" ? <AboutMe /> : <Publications /> }
            </div>
            <div className="button-div">
                <div id="about-me" onClick={buttonClickedAboutMe}>About Me</div>
                <div id="publications"  onClick={buttonClickedPublish}>Publications</div>
            </div>
        </div>
    );
}

export default AboutComponent;