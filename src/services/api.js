import axios from 'axios'

const api = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  baseURL: "http://localhost:3001"
})

export default api