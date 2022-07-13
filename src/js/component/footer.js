import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => (
	<footer className="bg-dark py-4 mt-auto">
		<div className="container px-5">
			<div className="row align-items-center justify-content-between flex-column flex-sm-row">
				<div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Your Website 2022</div></div>
				<div className="col-auto">
					<NavLink className="link-light small" to="/linkerroneo">Privacy</NavLink>
					<span className="text-white mx-1">&middot;</span>
					<NavLink className="link-light small" to="/linkerroneo">Terms</NavLink>
					<span className="text-white mx-1">&middot;</span>
					<NavLink className="link-light small" to="/linkerroneo">Contact</NavLink>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer