// packages
import React from "react";
import {Router, Route, hashHistory, IndexRoute} from "react-router";

// imports
import App from "./components/app.js";
import CreateReminder from "./views/createreminder.js";
// <Route path="/" component={}/>

const Routes = (
	<Route path="/" component={App}>
		<IndexRoute component={CreateReminder}/>


	</Route>

)

export default Routes
