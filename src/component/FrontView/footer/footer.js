import React, { Component } from "react";

import skillsImage from "./img/webdev.jpg"
import prev from "./img/circled-chevron-left.png"
import next from "./img/circled-chevron-right.png"
import clothing from "./template/clothing.png"
import blog from "./template/blog.png"
import blog1 from "./template/blog1.jpg"
import blog2 from "./template/blog2.jpg"
import blog3 from "./template/blog3.png"
import bounty from "./template/bounty.jpg"
import "./footer.css";

const url_to_project = [
		// "https://mosboychatapp.netlify.app",
		// "https://mosboyfacerecognition.netlify.app",
		// "https://orderfishapp.netlify.app",
		// "https://mosboycompany.netlify.app",
		// "https://mosboyemail.netlify.app",
		// "https://mosboymobile.netlify.app",
		// "https://mosboyroughwork.netlify.app",
		// "https://mosboytip-calculator.netlify.app",
		clothing,blog,blog1,blog2,blog3,bounty
    ]
const nameofpage = [
    // "Chat application",
    // "FaceRecognition application",
    // "OrderFish application",
    // "Blog Site",
    // "Cloned email site",
    // "Mobile Flex Layout site",
    // "Flex Template",
	// "Tip calculator",
     ]
let flag = 0;
let nofpage = 1;
class Footer extends Component {
	constructor(props) {
		super();
		this.state={
			name:"", 
			email:"",
			subject:"",
			message:"",
			url_to_project: "",
			url_to_project2: ""
		}
	}
	componentDidMount(){
		this.setState({url_to_project:url_to_project[flag]})
		setInterval(()=>this.goToNextProject("next"),15000)
	}
    componentDidUpdate(){
    	const getIframe = document.querySelectorAll("dyiframe")
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
	goToNextProject=(e)=>{
	try {
	        if(/next/.test(e)){
	        	flag ++;
	        	nofpage ++;
	        	if(url_to_project[flag] === undefined){
	        		flag = 0;
	        		nofpage = 1;
	        		this.setState({url_to_project:url_to_project[flag]})
	        	}else{
	        		this.setState({url_to_project:url_to_project[flag]})
	        	}
	        	
	        }else if(/prev/.test(e)){
	        	flag -=1;
	        	nofpage -=1;
	        	if(url_to_project[flag] === undefined){
	        		flag = (url_to_project.length - 1);
	        		nofpage = url_to_project.length
	        		this.setState({url_to_project:url_to_project[flag]})
	        	}else{
	        		this.setState({url_to_project:url_to_project[flag]})
	        	}
	         }
		   }catch(err){
			console.log(err)
		}
	}

	render() {
		const{setOpacity} = this.props;
		return (
			<div className="footer" style={{opacity:setOpacity ? "0" :  "1"}}>
			    <div className="ourwork">
			         <p id="mywork"></p>
			         <h2>MY WORK</h2>
			         <div className="mywork">
					      <div className="BF">
				   <img className="iframe" src={this.state.url_to_project} alt="template" style={{width:"100%"}}/>
					       </div>
					        <div className="underproject">
					         <img src={prev} className="change prev" onClick = {() => this.goToNextProject("prev")}/>
						       <div className = "changeproject">
						           
						            <p className= "nofpage">{nofpage}</p>
						       		<p className="nameofpage">{nameofpage[flag]}</p>
						       		<p className= "nameoflink"><a href= {url_to_project[flag]}>view page</a></p>
						       </div>
						      <img src={next} className="change next" onClick = {() => this.goToNextProject("next")}/>
						     </div>
					    </div>
					 </div>
			  

			    	<div className="ourskill">
					 <p id="skills"></p>
					 <h2>WEB SKILL</h2>
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
				<footer><p><i>Mgenius {new Date().getFullYear() }</i></p></footer>
				</div>
			</div>
		);
	}
}
export default Footer;
