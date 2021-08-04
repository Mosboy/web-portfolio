import React, {Component} from "react";
import offerimg from "./img/portimagelaptop.jpg"
import "./offset.css"
class Offset extends Component{
	constructor(props){
		super();
	}

	render(){
		const {changeStateOpacity,changeFunctionOpacity} = this.props
		return(
				 <div className="offset" style={{display: changeStateOpacity ? "block" : "none"}}>
				 <h1 onClick={changeFunctionOpacity} title="close">X</h1>
				 <div className="myoffer">
				 <p className="myofferhead"><img src={offerimg} alt="offerimg"/><h3>My Niche</h3></p>
				 <p>Static and Dynamic websites</p>
				 <p>A scalable and productive webapp</p>
				 <p>Blogging site and  a web room forum for online communication</p>
				 <p>Custom websites according to client requirements</p>
				 <p>Communication system platform for users</p>
				 <p>Content management system</p>
				 <p>Online marketing site</p>
				 </div>
				 </div>
		       )           
	}
}
export default Offset