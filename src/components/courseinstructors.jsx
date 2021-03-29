import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getCourseInstructors } from "../services/instructorCourse"

const CourseInstructors = (props) => {
    const [courseInstructors, setCourseInstructors] = useState([])
    console.log(props.match.params.id)
    useEffect(() => {
        getCourseInstructors(props.match.params.id)
            .then(records => setCourseInstructors(records))
            .catch(error => console.log(error))
    }, [])



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Instructor</th>
                    </tr>
                </thead>
                <tbody>
                    {courseInstructors.map((courseInstructor, index) => {
                        return (
                            <tr key={index}>
                                <td>{courseInstructor.Course_Title}</td>
                                <td>{courseInstructor.First_Name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to="/courses">Back to Menu</Link>

        </div>
    )
}

export default CourseInstructors
