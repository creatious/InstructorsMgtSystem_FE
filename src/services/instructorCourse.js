import api from './api'


export const getCourseInstructors = (id) => {
  return new Promise((resolve, reject) => {
    api
      .get("/courseinstructors/"+id)
      .then(response => resolve(response.data))
      .catch(error => reject(error))
  })
}