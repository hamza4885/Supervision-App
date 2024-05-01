import Axios from '../Connection/connection'


export const getTopReviews = async()=>{
   try {
      const response = await Axios.get('/public/landing/testimonials?page&limit=3')
      return response?.data?.data?.items
   } catch (error) {
      console.error(error)
      return null
   }
}