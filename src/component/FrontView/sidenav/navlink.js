import React, { Component } from "react";
import portimage from "./img/prof.jpg"
import "./navlink.css"
class Navlink extends Component {
	constructor() {
		super();
		this.state={
			checkLinkClicked:"home"
		}
	}
   checkLinkClicked=(e)=>{
        this.setState({checkLinkClicked:e.target.text})
	}
	render() {
		const {checkLinkClicked} = this.state
		return (
			<nav>
			   <ul class="image">
				<li><img src={portimage} alt="portfolio image" /></li>
				</ul>

				<ul class="link">
				<li><a style={{color:/home/i.test(checkLinkClicked) ? "royalblue" : "white" }} href="#home" class="home" onClick={this.checkLinkClicked}>Home</a></li>
				<li><a style={{color:/skill/i.test(checkLinkClicked) ? "royalblue" : "white"}} href="#skills" class="skills" onClick={this.checkLinkClicked}>Skills</a></li>
				<li><a style={{color:/about/i.test(checkLinkClicked) ? "royalblue" : "white" }} href="#about" class="about" onClick={this.checkLinkClicked}>About</a></li>
				<li><a style={{color:/Mywork/i.test(checkLinkClicked) ? "royalblue" : "white" }} href="#mywork" class="about" onClick={this.checkLinkClicked}>Mywork</a></li>
				<li><a style={{color:/contact/i.test(checkLinkClicked) ? "royalblue" : "white" }} href="#contact" class="contact" onClick={this.checkLinkClicked}>Contact</a></li>
				</ul>
			</nav>
		);
	}
}
export default Navlink;
