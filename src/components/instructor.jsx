
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getInstructor } from "../services/instructors"

const Instructor = (props) => {
    const [instructor, setInstructor] = useState({})

    useEffect(() => {
        getInstructor(props.match.params.id)
            .then(instructor => setInstructor(instructor.response[0]))
            .catch(error => console.log(error))
    }, [])



    return (
        <div>
            <h2>Instructor Contact Information</h2>
            <table>
                <thead>
                    <th>First_Name</th>
                    <th>Last_Name</th>
                    <th>Phone_Number</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    <td>{instructor.First_Name}</td>
                    <td>{instructor.Last_Name}</td>
                    <td>{instructor.Phone_Number}</td>
                    <td>{instructor.Email}</td>
                </tbody>
            </table>

            <Link to="/instructors">Back to Instructors</Link>
        </div>
    )
}

export default Instructor