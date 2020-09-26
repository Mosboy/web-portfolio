import React, {Component} from "react";
import "./header.css"
class Header extends Component{
	constructor(props){
		super();
		
	}
	

	render(){
		const {changeStateOpacity,changeFunctionOpacity} = this.props
		return(
		       <div id="home" className="header" style={{opacity: changeStateOpacity ? "0.3" : "1"}}>
                
                 <div className="header_box">
	                 <h4>MOSES BENJAMIN</h4>
	                 <h5>WEB DEVELOPER</h5>
                 </div>
                 <div className="headfooter">
                  <a href="#moses"><p className="headfoot" onClick={changeFunctionOpacity}>WHAT I CAN OFFER</p></a>
					</div>
		       </div>
		       )
	}
}
export default Header