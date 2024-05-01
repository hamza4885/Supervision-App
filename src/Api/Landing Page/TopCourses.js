import Axios from '../Connection/connection'


export const getTopCourses = async()=>{
   try {
      const response = await Axios.get('/public/landing/courses')
      return response?.data?.data?.items
   } catch (error) {
      console.error(error)
      return null
   }
}