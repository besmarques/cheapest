import React from "react";
import {
	BrowserRouter,
	Route,
	Routes,
	Navigate,
	Outlet
} from "react-router-dom";

import injectContext from "./store/appContext";

//import components
import ScrollToTop from "./component/scrollToTop.jsx";
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";

//import pages
import Home from "./pages/home.jsx";
import Demo from "./pages/demo.jsx";
import Single from "./pages/single.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route element={<Home />} exact path="/" />
						<Route element={<Demo />} exact path="/demo" />
						<Route element={<Single />} exact path="/single/:theid" />
						<Route element={"Not found!"} exact path="*" />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
