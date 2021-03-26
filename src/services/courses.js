import api from './api'

export const getCourses = () => {
    return new Promise((resolve, reject) => {
        api.get("/courses")
        .then(response => resolve(response.data))
        .catch(error => reject(error))
    })
}