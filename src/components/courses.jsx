import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { getCourses } from '../services/courses'

const Courses = () => {
    const [Courses, setCourses] = useState([])

    useEffect(() => {
        getCourses()
            .then(data => setCourses(data))
            .catch(error => console.log(error))

    }, [])

    return (
        <div>
            <h2>List of Courses</h2>
            <table>
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Course Description</th>
                    </tr>
                </thead>
                <tbody>
                    {Courses.map((course, index) => {
                        return (
                            <tr key={index}>
                                <td><Link to={`/courseinstructors/${course.ID}`}>{course.Course_Title}</Link></td>
                                <td>{course.Course_Description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to="/menu">Back to Menu</Link>
        </div>
    )

}

export default Courses