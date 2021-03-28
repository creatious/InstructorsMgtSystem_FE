import api from './api'

export const getInstructorsCourses = () => {
  return new Promise((resolve, reject) => {
    api
      .get("/instructorscourses")
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}

export const getCourseInstructors = (id) => {
  return new Promise((resolve, reject) => {
    api
      .get("/courseinstructors/"+id)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}