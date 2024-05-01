import Axios from '../Connection/connection'

export const getStats = async()=>{
   try {
      const response = await Axios.get('/public/landing/stats')
      return response?.data?.data
   } catch (error) {
      console.error(error)
      return null
   }
}