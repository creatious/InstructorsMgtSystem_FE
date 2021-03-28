import React from "react"
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/instructors"><h4>List of Instructors</h4></Link></li>
                <li><Link to="/courses"><h4>List of Training courses</h4> </Link></li>
                <li><Link to="/instructorscourses"><h4>List of Instructors and Courses they lecture</h4> </Link></li>
                <li><Link to="/instructorscourses"><h4>List of Courses and their Instructors</h4> </Link></li>
                <Link to="/">Back to Homepage</Link>
            </ul>
        </div>
    )
}

export default Menu