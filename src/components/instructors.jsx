import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { getInstructors } from '../services/instructors'

const Instructors = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        getInstructors()
            .then(data => setInstructors(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h2>List of Instructors</h2>
            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>last name</th>
                        <th>Phone number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {instructors.map((instructor, index) => {
                        return (
                            <tr key={index}>
                                <td><Link to={`/instructor/${instructor.ID}`}>{instructor.First_Name}</Link></td>
                                <td>{instructor.Last_Name}</td>
                                <td>{instructor.Phone_Number}</td>
                                <td>{instructor.Email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Link to="/menu">Back to Menu</Link>
        </div>
    )
}

export default Instructors