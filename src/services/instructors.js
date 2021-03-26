import api from './api'

export const getInstructors = () => {
  return new Promise((resolve, reject) => {
    api
      .get("/instructors")
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}


export const getInstructor = (id) => {
  return new Promise((resolve, reject) => {
    api
      .get("/instructor/"+id)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}
