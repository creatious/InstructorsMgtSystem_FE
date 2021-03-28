import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { getInstructorsCourses } from '../services/instructorCourse'

const InstructorsCourses = () => {
    const [instructorscourses, setInstructorscourses] = useState([])

    useEffect(() => {
        getInstructorsCourses()
            .then(data => setInstructorscourses(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h2>List of Instructors and Courses they teach</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Course Title</th>
                    </tr>
                </thead>
                <tbody>
                    {instructorscourses.map((instructorcourse, index) => {
                        return (
                            <tr key={index}>
                                <td>{instructorcourse.First_Name}</td>
                                <td><Link to={`/courseinstructors/${instructorcourse.ID}`}>{instructorcourse.Course_Title}</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to="/menu">Back to Menu</Link>
        </div>
    )

}

export default InstructorsCourses