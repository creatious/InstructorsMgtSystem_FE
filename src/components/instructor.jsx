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
            <div>First Name: {instructor.First_Name}</div>
            <div>Last Name: {instructor.Last_Name}</div>
            <div>Phone Number: {instructor.Phone_Number}</div>
            <div>Email Address: {instructor.Email}</div>
            <Link to="/instructors">Back to Instructors</Link>
        </div>
    )
}

export default Instructor
