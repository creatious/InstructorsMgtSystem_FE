import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Menu from "./components/menu";
import Instructors from "./components/instructors";
import Instructor from "./components/instructor";
import Courses from "./components/courses";
import InstructorsCourses from "./components/instructorscourses"
import CourseInstructors from "./components/courseinstructors";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/menu" component={Menu} exact />
				<Route path="/instructors" component={Instructors} exact />
				<Route path="/instructor/:id" component={Instructor} exact />
				<Route path="/courses" component={Courses} exact />
				<Route path="/instructorscourses" component={InstructorsCourses} exact />
				<Route path="/courseinstructors/:ID" component={CourseInstructors} exact />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
