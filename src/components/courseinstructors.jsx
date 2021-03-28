import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getCourseInstructors } from "../services/instructorCourse"

const CourseInstructors = (props) => {
    const [courseinstructors, setcourseinstructors] = useState({})

    useEffect(() => {
        getCourseInstructors(props.match.params.id)
            .then(courseinstructors => setcourseinstructors(courseinstructors.response[0]))
            .catch(error => console.log(error))
    }, [])



    return (
        <div>
            <div>First Name: {courseinstructors.First_Name}</div>
            <div>Last Name: {courseinstructors.Last_Name}</div>
            <Link to="/instructorscourses">Back to Instructors</Link>
        </div>
    )
}

export default CourseInstructors
