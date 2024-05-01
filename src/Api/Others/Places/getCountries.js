import Axios from '../../Connection/connection'

export const getCountries = async()=>{
   const response = await Axios.get('/places/countries')
   console.log(response)
}

export const getOneCountry = async(name)=>{
   const response = await Axios.get(`/places/countries/?text=${name}`)
   console.log(response)
}