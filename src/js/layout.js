import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import  Home  from "./views/home";
import  Contact  from "./views/Contact";
import  About  from "./views/About";
import Pricing from "./views/Pricing";
import  Faq  from "./views/Faq";
import  NotFound  from "./views/NotFound";
import  BlogHome  from "./views/Blog/BlogHome";
import  BlogPost  from "./views/Blog/BlogPost";
import  PortfolioItem  from "./views/Portfolio/PortfolioItem";
import  PortfolioOverview  from "./views/Portfolio/PortfolioOverview";
import Navbar from "./component/navbar";
import  Footer from "./component/footer";

//create your first component
const Layout = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path={"/"} component={Home} />
					<Route exact path={"/about"} component={About} />
					<Route exact path={"/contact"} component={Contact} />
					<Route exact path={"/pricing"} component={Pricing} />
					<Route exact path={"/faq"} component={Faq} />
					<Route exact path={"/blog/bloghome"} component={BlogHome} />
					<Route exact path={"/blog/blogpost"} component={BlogPost} />
					<Route exact path={"/portfolio/portfolioitem"} component={PortfolioItem} />
					<Route exact path={"/portfolio/portfoliooverview"} component={PortfolioOverview} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default Layout;
