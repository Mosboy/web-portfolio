import React, { Component } from "react";

import skillsImage from "./img/webdev.jpg"

import "./footer.css";

class Footer extends Component {
	constructor(props) {
		super();
		this.state={
			name:"", 
			email:"",
			subject:"",
			message:""
		}
	}

	callFetchFunction=()=>{
		fetch("https://mosboyportfolio.herokuapp.com",{
			method:"post",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify({
				name:this.state.name,
				email:this.state.email,
				subject:this.state.subject,
				message:this.state.message
			})
		})
		const getallInput = document.querySelectorAll("input")
		getallInput.forEach(a=> a.type != "submit" ? a.value="" : null )
	}

	render() {
		const{setOpacity} = this.props;
		return (
			<div className="footer" style={{opacity:setOpacity ? "0" :  "1"}}>
			    <div className="ourwork">
			         <p id="mywork"></p>
			         <h2>MY WORK</h2>
			         <div className="mywork">
					    <div class="BackendFrontend project">
					      <h3>Dynamic sites</h3>
					      <div class="BF">
					      <p>
					      <h5>Chat Web App 	&#8592;</h5>
					      <em>This web application allows you to do real time communication</em> <a href="https://mosboychatapp.netlify.app">go to page</a>
					      </p>
					      <p>
					      <h5>Order Sale App  &#8592;</h5>
					       <em>This web application/websites allow one a user to sign up with his or her social media account and order saled fish from the online market</em> <a href="https://orderfishapp.netlify.app">go to page</a>
					       </p>
					       <p>
					       <h5>FaceRecognition AI App &#8592;</h5>
					       <em> This application takes an online image url and return the image, indicating the position of the face on the image</em> <a href="https://mosboyfacerecognition.netlify.app">go to page</a>
					       </p>
					       </div>
					    </div>
					    <div class="Frontend project">
					    <h3>Static sites</h3>
					    <div className="front">
					    <p>
					      <h5>Blog &#8592;</h5>
					      <em style={{display:"block"}} >Blog film Advertisement site. </em><a href="https://mosboycompany.netlify.app" >go</a>
					      </p>
					      <p>
					      <h5>Email &#8592;</h5>
					      <em>Cloned email site. </em><a href="https://mosboyemail.netlify.app">go</a>
					      </p>
					      <p>
					      <h5>Mobile &#8592;</h5>
					      <em>Mobile Flex layout site. </em><a href="https://mosboymobile.netlify.app">go</a>
					      </p>
					      <p>
	                       <h5>Flex Template &#8592;</h5>
					      <em>A fun site, nothing too serious. </em><a href="https://mosboyroughwork.netlify.app">go</a>
					      </p>
					      <p>

					      <h5>Tip Calculator &#8592;</h5>
					      <em>A site that help calculate your tip from a bill to be paid. </em><a href="https://mosboytip-calculator.netlify.app">go</a>
					      </p>
					      <p>
					      <h5>Voiceinator &#8592;</h5>
					      <em>A site that returns in voice what you input in text. <i style={{color:"yellow"}}> (use chrome browser only)</i></em>
					         <a href="https://mosboyvoiceinator.netlify.app">go</a>
					      </p>
					      </div>
					    </div>
					 </div>
			    </div>

			    	<div className="ourskill">
					 <p id="skills"></p>
					 <h2>WEB DEV SKILL</h2>
				    <div className="skills">
				      <div className="skillImage"><img src={skillsImage} alt="skillsImage"/>
				      <p>My skills in the field</p></div>
				      <div className="skill skillhtml">
				        <h6>Html(hbs,ejs) &#9829;<em>Template Engine</em></h6>
				        <p></p>
				      </div>
				      <div className="skill skillcss">
				         <h6>Css(Sass) &#9829;<em>Site Styling</em></h6>
				        <p></p>
				      </div>
				      <div className="skill skilljs">
				        <h6>Javascript(vanilla) &#9829;<em>Site functionality</em></h6>
				        <p></p>
				      </div>
				      <div className="skill skillreact">
				         <h6>Reactjs &#9829;<em>View engine</em></h6>
				        <p></p>
				      </div>
				      <div class="skill skillnode">
				         <h6>Nodejs(Express) &#9829;<em>Microservices</em></h6>
				        <p></p>
				      </div>
				    </div>
			</div>

			    <div className="about">
			      <p id="about" className="abouthead"></p>
					<h2>About Me</h2>
					<p>Moses Osewe Benjamin,</p>
					<p>Male,</p>
					<p>Edo, Nigeria,</p>
					<p>
						Student of Computer sci, University of Benin,Edo Nigeria,
					</p>
					<p>Freelance/Remote web developer.</p>
					<p className="myarticle">
						I, Moses Benjamin is a passionate and God's gifted web
						developer/programmer who derive's joy in contributing to
						the society at large with <em>logics and coding.</em>
					</p>
				</div>
			
				<div className="contact">
				  <p id="contact" className="headcontact"></p>
					<h2>Contact</h2>
					<p>Edo, Nigeria,</p>
					<p>benmos16@gmail.com,</p>
					<p>Phone: +234 8134460259</p>
					<hr/>
					<p className="contactinput" ><input name="name" type="text" placeholder="Name"  onChange={(e)=>this.setState({name:e.target.value})}/></p>
					<p className="contactinput"><input name="email" type="email" placeholder="Email" onChange={(e)=>this.setState({email:e.target.value})}/></p>
					<p className="contactinput"><input name="subject" type="text" placeholder="Subject" onChange={(e)=>this.setState({subject:e.target.value})}/></p>
					<p className="contactinput"><input name="message" type="text" placeholder="Message me" onChange={(e)=>this.setState({message:e.target.value})}/></p>
                    <p className="contactinput"><input type="submit" value="Send message" onClick={this.callFetchFunction}/></p>

				</div>
				<div className="footerbottom">
				<footer><p><i>&copy; Mosboy 2020</i></p></footer>
				</div>
			</div>
		);
	}
}
export default Footer;
