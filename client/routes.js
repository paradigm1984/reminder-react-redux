// packages
import React from "react";
import {Router, Route, hashHistory, IndexRoute} from "react-router";

// imports
import App from "./components/app.js";
import Reminder from "./views/reminder.js";
// <Route path="/" component={}/>

const Routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Reminder}/>


	</Route>

)

export default Routes
