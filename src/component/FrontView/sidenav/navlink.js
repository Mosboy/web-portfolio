import React, { Component } from "react";
import portimage from "./img/genius.png";
import menu from "./img/menu.png"
import "./navlink.css"
class Navlink extends Component {
	constructor() {
		super();
		this.state={
			checkLinkClicked:"home",
			linkDisplay:"",
			checkWidthToDisplayColor:"royalblue"
		}
	}
   checkLinkClicked=(e)=>{
        this.setState({checkLinkClicked:e.target.text})
        this.setState({linkDisplay:""})
        this.setState({checkWidthToDisplayColor: Number(window.innerWidth) <= 602 ? "blue" : "royalblue"})
	}
	showAllLink =(e)=>{
		this.setState({linkDisplay:"linkDisplay"})
		 this.setState({checkWidthToDisplayColor: Number(window.innerWidth) <= 602 ? "blue" : "royalblue"})
	}
	render() {
		const {checkLinkClicked,checkWidthToDisplayColor} = this.state
		return (
			<nav>
			   <ul className="image">
				   <li><img src={portimage} alt="portfolio image" /></li>
				</ul>
				<div className = "name">
				 <p>Mgenius</p>
				</div>
				<p className="menu" onClick={()=> this.showAllLink("menu")}>
				  <span>&#9776;</span>
				</p>
				<ul className = {`link ${this.state.linkDisplay}`}>
						<li><a style={{color:/home/i.test(checkLinkClicked) ? checkWidthToDisplayColor : "white" }} href="#home" className="home" onClick={this.checkLinkClicked}>Home</a></li>
						<li><a style={{color:/skill/i.test(checkLinkClicked) ? checkWidthToDisplayColor : "white"}} href="#skills" className="skills" onClick={this.checkLinkClicked}>Skills</a></li>
						<li><a style={{color:/about/i.test(checkLinkClicked) ? checkWidthToDisplayColor : "white" }} href="#about" className="about" onClick={this.checkLinkClicked}>About</a></li>
						<li><a style={{color:/Mywork/i.test(checkLinkClicked) ? checkWidthToDisplayColor : "white" }} href="#mywork" className="about" onClick={this.checkLinkClicked}>Mywork</a></li>
						<li><a style={{color:/contact/i.test(checkLinkClicked) ? checkWidthToDisplayColor : "white" }} href="#contact" className="contact" onClick={this.checkLinkClicked}>Contact</a></li>
				</ul>
			</nav>
		);
	}
}
export default Navlink;
