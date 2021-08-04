import React, { Component } from "react";
import Header from "./header/header";
import Navlink from "./sidenav/navlink";
import Footer from "./footer/footer";
import Offset from "./offset/offset";
import "./frontview.css";

class Frontview extends Component {
	constructor() {
		super();
		this.state = {
			setOpacity: false,
		};
	}
	setOpacity = () => {
		if (this.state.setOpacity) this.setState({ setOpacity: false });
		else { 
			this.setState({ setOpacity: true });
		}
	};
	render() {
		return (
			<div className="frontview">
				{this.state.setOpacity ? (
					<Offset
						changeStateOpacity={this.state.setOpacity}
						changeFunctionOpacity={this.setOpacity}
					/>
				) : (
					<fragment>
						<Navlink reduceOpacity={this.state.setOpacity} />
						<Header
							changeStateOpacity={this.state.setOpacity}
							changeFunctionOpacity={this.setOpacity}
						/>
						<Footer setOpacity={this.state.setOpacity} />
					</fragment>
				)}
			</div>
		);
	}
}
export default Frontview;
