import Axios from '../../Connection/connection'

export const getFields = async()=>{
   const response = await Axios.get('/public/fields?page&limit&id&deleted')
   console.log(response)
}