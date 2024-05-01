import Axios from '../../Connection/connection'

export const getCourses = async()=>{
   try {
      const response = await Axios.get('/public/course?page&limit&id&deleted')
      return response?.data?.data?.items
   } catch (error) {
      console.error(error)
      return null
   }
}