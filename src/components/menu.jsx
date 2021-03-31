import React from "react"
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/instructors"><h4>List of Instructors</h4></Link></li>
                <li><Link to="/courses"><h4>List of Courses</h4> </Link></li>
                <Link to="/">Back to Homepage</Link>
            </ul>
        </div>
    )
}

export default Menu